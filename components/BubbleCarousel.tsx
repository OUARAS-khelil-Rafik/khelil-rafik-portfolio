import { motion, useAnimation, useMotionValue, useTransform, animate, PanInfo } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Skill } from '../types';

interface BubbleCarouselProps {
  skills: Skill[];
  isDark: boolean;
  categoryIndex: number;
}

// Logos that need to be inverted in dark mode
const darkLogos = ['Three.js', 'Express', 'Flask', 'GitHub', 'Spyder', 'Pandas', 'Next.js'];

const BubbleCarousel = ({ skills, isDark, categoryIndex }: BubbleCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const isDragging = useRef(false);
  const lastVelocity = useRef(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const autoRotateRef = useRef<ReturnType<typeof animate> | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const count = skills.length;
  const angleStep = 360 / count;
  
  // Responsive radius based on skill count
  const radius = count > 8 ? 110 : count > 5 ? 95 : 80;

  // Auto-rotate when not interacting
  useEffect(() => {
    if (!isInteracting && hoveredIndex === null) {
      autoRotateRef.current = animate(rotation, rotation.get() + 360, {
        duration: 30,
        ease: 'linear',
        repeat: Infinity,
      });
    }
    return () => {
      autoRotateRef.current?.stop();
    };
  }, [isInteracting, hoveredIndex, rotation]);

  const handleDragStart = useCallback(() => {
    isDragging.current = true;
    setIsInteracting(true);
    autoRotateRef.current?.stop();
    animationRef.current?.stop();
  }, []);

  const handleDrag = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!isDragging.current) return;
    const delta = info.delta.x * 0.5;
    rotation.set(rotation.get() + delta);
    lastVelocity.current = info.velocity.x * 0.3;
  }, [rotation]);

  const handleDragEnd = useCallback(() => {
    isDragging.current = false;
    
    // Apply inertia
    const velocity = lastVelocity.current;
    if (Math.abs(velocity) > 5) {
      animationRef.current = animate(rotation, rotation.get() + velocity * 2, {
        type: 'spring',
        damping: 30,
        stiffness: 100,
        onComplete: () => setIsInteracting(false),
      });
    } else {
      setIsInteracting(false);
    }
  }, [rotation]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    autoRotateRef.current?.stop();
    setIsInteracting(true);
    rotation.set(rotation.get() + e.deltaY * 0.3);
    
    // Resume auto-rotate after wheel stops
    const timeout = setTimeout(() => setIsInteracting(false), 1500);
    return () => clearTimeout(timeout);
  }, [rotation]);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-[260px] cursor-grab active:cursor-grabbing select-none touch-none"
      onPanStart={handleDragStart}
      onPan={handleDrag}
      onPanEnd={handleDragEnd}
      onWheel={handleWheel}
      style={{ perspective: 800 }}
    >
      {/* Central glow */}
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 ${
          isInteracting ? 'opacity-60' : 'opacity-30'
        }`}
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)'
        }}
      />

      {/* Orbital ring */}
      <motion.div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed transition-colors duration-300 ${
          isDark ? 'border-slate-700/30' : 'border-slate-300/50'
        }`}
        style={{ 
          width: radius * 2 + 40, 
          height: radius * 2 + 40,
          opacity: 0.5
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Skill bubbles */}
      {skills.map((skill, index) => (
        <SkillBubble
          key={`${categoryIndex}-${index}-${skill.name}`}
          skill={skill}
          index={index}
          count={count}
          angleStep={angleStep}
          radius={radius}
          rotation={rotation}
          isDark={isDark}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}

      {/* Center indicator */}
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
          isDark ? 'bg-blue-500/50' : 'bg-blue-400/50'
        }`}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

interface SkillBubbleProps {
  skill: Skill;
  index: number;
  count: number;
  angleStep: number;
  radius: number;
  rotation: ReturnType<typeof useMotionValue<number>>;
  isDark: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const SkillBubble = ({
  skill,
  index,
  count,
  angleStep,
  radius,
  rotation,
  isDark,
  hoveredIndex,
  setHoveredIndex,
}: SkillBubbleProps) => {
  const baseAngle = index * angleStep;
  
  // Calculate position and scale based on rotation
  const angle = useTransform(rotation, (r) => (baseAngle + r) * (Math.PI / 180));
  const x = useTransform(angle, (a) => Math.sin(a) * radius);
  const y = useTransform(angle, (a) => -Math.cos(a) * radius * 0.4); // Elliptical for 3D effect
  const z = useTransform(angle, (a) => Math.cos(a)); // Depth
  
  // Scale and opacity based on z position (front = larger, back = smaller)
  const scale = useTransform(z, [-1, 0, 1], [0.6, 0.85, 1.2]);
  const opacity = useTransform(z, [-1, 0, 1], [0.4, 0.7, 1]);
  const zIndex = useTransform(z, [-1, 1], [0, 10]);
  const blur = useTransform(z, [-1, 0, 1], [2, 0.5, 0]);

  const isHovered = hoveredIndex === index;
  const finalScale = useTransform(scale, (s) => isHovered ? s * 1.3 : s);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center cursor-pointer"
      style={{
        x,
        y,
        scale: finalScale,
        opacity,
        zIndex,
        filter: useTransform(blur, (b) => `blur(${b}px)`),
        marginLeft: -32,
        marginTop: -32,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      whileHover={{ rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800 to-slate-700 shadow-lg shadow-black/30' 
            : 'bg-gradient-to-br from-white to-slate-100 shadow-lg shadow-slate-300/50'
        }`}
        style={{
          boxShadow: isHovered 
            ? `0 0 30px ${skill.color || '#3b82f6'}50, 0 8px 25px rgba(0,0,0,0.3)` 
            : undefined,
          border: `2px solid ${isHovered ? skill.color || '#3b82f6' : isDark ? 'rgba(71, 85, 105, 0.5)' : 'rgba(203, 213, 225, 0.8)'}`,
        }}
        animate={isHovered ? { 
          y: [0, -5, 0],
          transition: { duration: 0.5, repeat: Infinity }
        } : {}}
      >
        {/* Inner glow */}
        <div 
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(circle at 30% 30%, ${skill.color || '#3b82f6'}30, transparent 60%)`
          }}
        />
        
        <motion.img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 object-contain relative z-10"
          loading="lazy"
          style={{
            filter: isDark && darkLogos.includes(skill.name) 
              ? 'invert(1) brightness(2)' 
              : isHovered ? 'none' : 'grayscale(30%)'
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />

        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: skill.color || '#3b82f6' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  x: [0, (i - 1) * 20],
                  y: [0, -30 - i * 10],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Skill name tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
        className={`absolute -bottom-7 px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${
          isDark ? 'bg-slate-700 text-white' : 'bg-slate-800 text-white'
        }`}
        style={{
          boxShadow: `0 4px 15px ${skill.color || '#3b82f6'}40`
        }}
      >
        {skill.name}
        <div 
          className={`absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 ${
            isDark ? 'bg-slate-700' : 'bg-slate-800'
          }`}
        />
      </motion.div>
    </motion.div>
  );
};

export default BubbleCarousel;
