'use client';

import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  speed?: number;
  backgroundGradient?: string;
  enableBackgroundAnimation?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  id,
  speed = 0.5,
  backgroundGradient,
  enableBackgroundAnimation = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"]
  });

  // Smooth spring animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Transform values based on speed - much more subtle
  const y = useTransform(smoothProgress, [0, 1], [0, speed * -30]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.98, 1, 1, 0.98]);
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -20]);
  const backgroundRotate = useTransform(smoothProgress, [0, 1], [0, 2]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{
        y,
        opacity,
        scale,
      }}
    >
      {/* Background Animation Layer */}
      {enableBackgroundAnimation && backgroundGradient && (
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            background: backgroundGradient,
            y: backgroundY,
            rotate: backgroundRotate,
          }}
        />
      )}
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};
