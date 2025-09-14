'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
}) => {
  const deviceInfo = useDeviceDetection();

  // Get initial values based on variant and device capabilities
  const getInitialValues = () => {
    const baseValues = {
      fadeUp: { opacity: 0, y: deviceInfo.isLowEnd ? 10 : 20 },
      slideLeft: { opacity: 0, x: deviceInfo.isLowEnd ? -15 : -30 },
      slideRight: { opacity: 0, x: deviceInfo.isLowEnd ? 15 : 30 },
      scale: { opacity: 0, scale: deviceInfo.isLowEnd ? 0.99 : 0.98 },
      rotate: { opacity: 0, rotate: deviceInfo.isLowEnd ? -1 : -3 },
    };
    
    return baseValues[variant] || baseValues.fadeUp;
  };

  // Skip animations if reduced motion is preferred
  if (deviceInfo.hasReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={getInitialValues()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: deviceInfo.isLowEnd ? 0.1 : 0.3 }}
      transition={{
        duration: deviceInfo.isLowEnd ? 0.3 : 0.5,
        delay: deviceInfo.isLowEnd ? delay * 0.5 : delay,
        ease: deviceInfo.isLowEnd ? "easeOut" : "easeOut",
        type: deviceInfo.isLowEnd ? "tween" : "spring",
      }}
    >
      {children}
    </motion.div>
  );
};
