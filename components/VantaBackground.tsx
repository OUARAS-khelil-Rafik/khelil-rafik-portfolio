import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

declare global {
  interface Window {
    VANTA: {
      BIRDS: (config: Record<string, unknown>) => { destroy: () => void };
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
        const effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: isDark ? 0x0f172a : 0xf8fafc,
          color1: isDark ? 0x3b82f6 : 0x6366f1, // primary blue / indigo
          color2: isDark ? 0x6366f1 : 0x3b82f6, // indigo / blue
          colorMode: "lerp",
          wingSpan: 25.0,
          birdSize: 1.2,
          speedLimit: 4,
          separation: 30,
          alignment: 30,
          cohesion: 30,
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
