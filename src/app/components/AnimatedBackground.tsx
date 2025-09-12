'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ mousePosition }) => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animations for better performance
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothScrollY = useSpring(scrollYProgress, springConfig);
  
  // Transform values for different layers - reduced movement
  const backgroundY = useTransform(smoothScrollY, [0, 1], [0, -100]);
  const particlesY = useTransform(smoothScrollY, [0, 1], [0, -200]);
  const geometryY = useTransform(smoothScrollY, [0, 1], [0, -300]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-black">
      {/* Layer 1: Base Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-25"
        style={{
          y: backgroundY,
          background: `
            radial-gradient(ellipse at ${20 + mousePosition.x * 2}% ${50 + mousePosition.y * 2}%, rgba(59, 130, 246, 0.2) 0%, transparent 70%),
            radial-gradient(ellipse at ${80 + mousePosition.x * 2}% ${20 + mousePosition.y * 2}%, rgba(147, 51, 234, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse at ${40 + mousePosition.x * 2}% ${80 + mousePosition.y * 2}%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)
          `,
        }}
      />

      {/* Layer 2: Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          y: backgroundY,
          x: mousePosition.x * 3,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Layer 3: Floating Particles */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: particlesY }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full shadow-sm shadow-blue-400/10"
            style={{
              left: `${10 + (i * 5.5) % 80}%`,
              top: `${10 + (i * 8) % 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Layer 4: Geometric Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: geometryY }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geometry-${i}`}
            className="absolute"
            style={{
              left: `${20 + (i * 10) % 60}%`,
              top: `${25 + (i * 15) % 50}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className={`
                w-6 h-6 border shadow-sm
                ${i % 3 === 0 ? 'bg-blue-500/10 border-blue-400/20 rounded-full shadow-blue-400/15' : 
                  i % 3 === 1 ? 'bg-purple-500/10 border-purple-400/20 rounded-lg rotate-45 shadow-purple-400/15' : 
                  'bg-emerald-500/10 border-emerald-400/20 rounded-sm shadow-emerald-400/15'}
              `}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 5: 3D Cubes */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: useTransform(smoothScrollY, [0, 1], [0, -800]),
          rotateX: useTransform(smoothScrollY, [0, 1], [0, 15]),
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute"
            style={{
              left: `${30 + (i * 20) % 40}%`,
              top: `${35 + (i * 25) % 30}%`,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="w-8 h-8 bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-blue-400/25 backdrop-blur-sm shadow-sm shadow-blue-500/10 rounded-lg"
              style={{
                transform: `translateZ(${12 + i * 4}px)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 6: Animated Waves */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-40 opacity-15"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 100%)',
          y: useTransform(smoothScrollY, [0, 1], [0, 30]),
        }}
        animate={{
          clipPath: [
            'polygon(0 70%, 100% 50%, 100% 100%, 0% 100%)',
            'polygon(0 50%, 100% 70%, 100% 100%, 0% 100%)',
            'polygon(0 70%, 100% 50%, 100% 100%, 0% 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
