'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
  // Get initial values based on variant
  const getInitialValues = () => {
    switch (variant) {
      case 'fadeUp':
        return { opacity: 0, y: 20 };
      case 'slideLeft':
        return { opacity: 0, x: -30 };
      case 'slideRight':
        return { opacity: 0, x: 30 };
      case 'scale':
        return { opacity: 0, scale: 0.98 };
      case 'rotate':
        return { opacity: 0, rotate: -3 };
      default:
        return { opacity: 0, y: 20 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialValues()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
