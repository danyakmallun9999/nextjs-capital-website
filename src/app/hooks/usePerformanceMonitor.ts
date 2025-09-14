'use client';

import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  isPerformanceGood: boolean;
  shouldReduceAnimations: boolean;
}

export function usePerformanceMonitor(): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    isPerformanceGood: true,
    shouldReduceAnimations: false,
  });

  const measureFPS = useCallback(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return () => {};
    
    let frames = 0;
    let startTime = performance.now();
    
    const measure = () => {
      const currentTime = performance.now();
      frames++;
      
      // Calculate FPS every second
      if (currentTime - startTime >= 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - startTime));
        const isPerformanceGood = fps >= 30;
        const shouldReduceAnimations = fps < 20;
        
        setMetrics({
          fps,
          isPerformanceGood,
          shouldReduceAnimations,
        });
        
        // Reset counters
        frames = 0;
        startTime = currentTime;
      }
      
      requestAnimationFrame(measure);
    };
    
    const rafId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    // Start monitoring after component mount
    const cleanup = measureFPS();
    
    return cleanup;
  }, [measureFPS]);

  return metrics;
}
