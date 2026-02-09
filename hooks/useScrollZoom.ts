import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollZoom = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return {
    ref,
    animate: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 0.8,
      y: isInView ? 0 : 20,
    },
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  };
};
