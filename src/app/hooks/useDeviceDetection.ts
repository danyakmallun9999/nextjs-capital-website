'use client';

import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLowEnd: boolean;
  supportsWebGL: boolean;
  hasReducedMotion: boolean;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
  deviceMemory: number;
  hardwareConcurrency: number;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEnd: false,
    supportsWebGL: true,
    hasReducedMotion: false,
    connectionSpeed: 'unknown',
    deviceMemory: 4,
    hardwareConcurrency: 4,
  });

  useEffect(() => {
    const detectDevice = () => {
      // Check if we're on the client side
      if (typeof window === 'undefined') return;
      
      // Screen size detection
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      // Performance indicators
      const deviceMemory = (navigator as unknown as { deviceMemory?: number })?.deviceMemory || 4;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      
      // Low-end device detection
      const isLowEnd = 
        deviceMemory <= 2 || 
        hardwareConcurrency <= 2 || 
        isMobile ||
        /Android.*Chrome/.test(navigator.userAgent);

      // WebGL support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const supportsWebGL = !!gl;

      // Reduced motion preference
      const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Connection speed (if available)
      const connection = (navigator as unknown as { connection?: { effectiveType: string } })?.connection;
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
      
      if (connection) {
        const effectiveType = connection.effectiveType;
        connectionSpeed = ['slow-2g', '2g', '3g'].includes(effectiveType) ? 'slow' : 'fast';
      }

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLowEnd,
        supportsWebGL,
        hasReducedMotion,
        connectionSpeed,
        deviceMemory,
        hardwareConcurrency,
      });
    };

    detectDevice();

    // Re-detect on resize
    const handleResize = () => {
      detectDevice();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceInfo;
}
