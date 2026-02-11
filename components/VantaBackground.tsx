import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

declare global {
  interface Window {
    VANTA: {
      TOPOLOGY: (config: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

const VantaBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!vantaRef.current) return;

    // Destroy previous effect
    if (vantaEffect) {
      vantaEffect.destroy();
    }

    // Wait for VANTA to be available
    const initVanta = () => {
      if (window.VANTA) {
        const effect = window.VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: isDark ? 0x3b82f6 : 0x6366f1, // primary blue in dark, indigo in light
          backgroundColor: isDark ? 0x0f172a : 0xf8fafc, // dark-bg or light-bg
        });
        setVantaEffect(effect);
      }
    };

    // Check if VANTA is already loaded
    if (window.VANTA) {
      initVanta();
    } else {
      // Wait for script to load
      const checkVanta = setInterval(() => {
        if (window.VANTA) {
          clearInterval(checkVanta);
          initVanta();
        }
      }, 100);

      return () => clearInterval(checkVanta);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [isDark]);

  return (
    <div ref={vantaRef} className="fixed inset-0 -z-10">
      {children}
    </div>
  );
};

export default VantaBackground;
