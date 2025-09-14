'use client';

import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  isLowEnd: boolean;
  supportsWebGL: boolean;
  hasReducedMotion: boolean;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
  deviceMemory: number;
  hardwareConcurrency: number;
  screenCategory: 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'large-desktop';
  viewportWidth: number;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: true,
    isLargeDesktop: false,
    isLowEnd: false,
    supportsWebGL: true,
    hasReducedMotion: false,
    connectionSpeed: 'unknown',
    deviceMemory: 4,
    hardwareConcurrency: 4,
    screenCategory: 'desktop',
    viewportWidth: 1920,
  });

  useEffect(() => {
    const detectDevice = () => {
      // Check if we're on the client side
      if (typeof window === 'undefined') return;
      
      // Enhanced screen size detection with laptop category
      const width = window.innerWidth;
      
      // Detailed breakpoints for better responsiveness
      const isMobile = width < 768;                    // 0-767px
      const isTablet = width >= 768 && width < 1024;   // 768-1023px  
      const isLaptop = width >= 1024 && width < 1440;  // 1024-1439px (most laptops)
      const isDesktop = width >= 1440 && width < 1920; // 1440-1919px (desktop monitors)
      const isLargeDesktop = width >= 1920;            // 1920px+ (large monitors)
      
      // Determine screen category
      let screenCategory: 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'large-desktop';
      if (isMobile) screenCategory = 'mobile';
      else if (isTablet) screenCategory = 'tablet';
      else if (isLaptop) screenCategory = 'laptop';
      else if (isDesktop) screenCategory = 'desktop';
      else screenCategory = 'large-desktop';

      // Performance indicators
      const deviceMemory = (navigator as unknown as { deviceMemory?: number })?.deviceMemory || 4;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      
      // Enhanced low-end device detection with iPhone exceptions
      const userAgent = navigator.userAgent;
      
      // Note: Modern device detection is now handled in the main component
      // for more specific 3D rendering logic
      
      // More nuanced low-end detection
      const isLowEnd = 
        deviceMemory <= 2 || 
        hardwareConcurrency <= 2 || 
        // Only consider old Android devices as low-end, not all mobile
        (/Android [4-7]\./.test(userAgent)) ||
        // Very old iOS devices
        (/iPhone OS [8-9]|iPhone OS 1[0-1]/.test(userAgent));

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
        isLaptop,
        isDesktop,
        isLargeDesktop,
        isLowEnd,
        supportsWebGL,
        hasReducedMotion,
        connectionSpeed,
        deviceMemory,
        hardwareConcurrency,
        screenCategory,
        viewportWidth: width,
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
