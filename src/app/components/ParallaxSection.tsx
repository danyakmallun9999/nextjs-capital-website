'use client';

import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

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
  const deviceInfo = useDeviceDetection();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"]
  });

  // Smooth spring animation - simplified for low-end devices
  const springConfig = { 
    stiffness: deviceInfo.isLowEnd ? 50 : 100, 
    damping: deviceInfo.isLowEnd ? 20 : 30, 
    restDelta: 0.001 
  };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Transform values based on speed and device capabilities - always call hooks
  const yTransform = useTransform(smoothProgress, [0, 1], [0, speed * (deviceInfo.isLowEnd ? -15 : -30)]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.9]);
  const scaleTransform = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [deviceInfo.isLowEnd ? 0.99 : 0.98, 1, 1, deviceInfo.isLowEnd ? 0.99 : 0.98]);
  const backgroundYTransform = useTransform(smoothProgress, [0, 1], [0, deviceInfo.isLowEnd ? -10 : -20]);
  const backgroundRotateTransform = useTransform(smoothProgress, [0, 1], [0, deviceInfo.isLowEnd ? 1 : 2]);
  
  // Apply transforms conditionally
  const y = deviceInfo.hasReducedMotion ? 0 : yTransform;
  const opacity = deviceInfo.hasReducedMotion ? 1 : opacityTransform;
  const scale = deviceInfo.hasReducedMotion ? 1 : scaleTransform;
  const backgroundY = deviceInfo.hasReducedMotion ? 0 : backgroundYTransform;
  const backgroundRotate = deviceInfo.hasReducedMotion ? 0 : backgroundRotateTransform;

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
      {enableBackgroundAnimation && backgroundGradient && !deviceInfo.hasReducedMotion && (
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
