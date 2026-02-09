import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollZoomWrapperProps {
  children: React.ReactNode;
}

const ScrollZoomWrapper: React.FC<ScrollZoomWrapperProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
        y: isInView ? 0 : 30,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollZoomWrapper;
