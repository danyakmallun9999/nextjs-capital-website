'use client';

import { useDeviceDetection } from './useDeviceDetection';

interface ResponsiveConfig {
  // Typography scales
  heroTitleSize: string;
  heroSubtitleSize: string;
  sectionTitleSize: string;
  bodyTextSize: string;
  
  // Spacing
  sectionPadding: string;
  containerPadding: string;
  elementSpacing: string;
  
  // Layout
  maxWidth: string;
  gridGap: string;
  
  // Animation
  animationDuration: number;
  animationDelay: number;
  
  // 3D/Effects
  particleCount: number;
  effectComplexity: 'minimal' | 'reduced' | 'normal' | 'enhanced';
}

export function useResponsiveConfig(): ResponsiveConfig {
  const deviceInfo = useDeviceDetection();
  
  // Check if it's a modern iPhone/iPad for special handling
  const isModernIOS = typeof window !== 'undefined' && (
    (/iPhone1[2-9]/.test(navigator.userAgent)) ||  // iPhone 12+
    (/iPad/.test(navigator.userAgent) && /Version\/1[4-9]/.test(navigator.userAgent))
  );
  
  // Base configurations for each screen category
  const configs: Record<typeof deviceInfo.screenCategory, ResponsiveConfig> = {
    'mobile': {
      heroTitleSize: 'text-3xl sm:text-4xl',
      heroSubtitleSize: 'text-base sm:text-lg',
      sectionTitleSize: 'text-2xl sm:text-3xl',
      bodyTextSize: 'text-sm sm:text-base',
      sectionPadding: 'py-16 sm:py-20',
      containerPadding: 'px-4 sm:px-6',
      elementSpacing: 'space-y-4 sm:space-y-6',
      maxWidth: 'max-w-none sm:max-w-2xl',
      gridGap: 'gap-4 sm:gap-6',
      animationDuration: 0.3,
      animationDelay: 0.1,
      // Enhanced for modern iOS devices
      particleCount: isModernIOS ? 80 : 50,
      effectComplexity: isModernIOS ? 'reduced' : 'minimal',
    },
    
    'tablet': {
      heroTitleSize: 'text-4xl md:text-5xl',
      heroSubtitleSize: 'text-lg md:text-xl',
      sectionTitleSize: 'text-3xl md:text-4xl',
      bodyTextSize: 'text-base md:text-lg',
      sectionPadding: 'py-20 md:py-24',
      containerPadding: 'px-6 md:px-8',
      elementSpacing: 'space-y-6 md:space-y-8',
      maxWidth: 'max-w-3xl md:max-w-4xl',
      gridGap: 'gap-6 md:gap-8',
      animationDuration: 0.4,
      animationDelay: 0.15,
      particleCount: 100,
      effectComplexity: 'reduced',
    },
    
    'laptop': {
      heroTitleSize: 'text-4xl lg:text-5xl xl:text-6xl',
      heroSubtitleSize: 'text-lg lg:text-xl',
      sectionTitleSize: 'text-3xl lg:text-4xl',
      bodyTextSize: 'text-base lg:text-lg',
      sectionPadding: 'py-20 lg:py-24',
      containerPadding: 'px-6 lg:px-10',
      elementSpacing: 'space-y-6 lg:space-y-8',
      maxWidth: 'max-w-3xl lg:max-w-4xl',
      gridGap: 'gap-6 lg:gap-8',
      animationDuration: 0.4,
      animationDelay: 0.15,
      particleCount: 120,
      effectComplexity: 'normal',
    },
    
    'desktop': {
      heroTitleSize: 'text-6xl xl:text-7xl 2xl:text-8xl',
      heroSubtitleSize: 'text-2xl xl:text-3xl',
      sectionTitleSize: 'text-5xl xl:text-6xl',
      bodyTextSize: 'text-xl xl:text-2xl',
      sectionPadding: 'py-28 xl:py-32',
      containerPadding: 'px-12 xl:px-16',
      elementSpacing: 'space-y-10 xl:space-y-12',
      maxWidth: 'max-w-5xl xl:max-w-6xl',
      gridGap: 'gap-10 xl:gap-12',
      animationDuration: 0.6,
      animationDelay: 0.25,
      particleCount: 200,
      effectComplexity: 'enhanced',
    },
    
    'large-desktop': {
      heroTitleSize: 'text-7xl 2xl:text-8xl 3xl:text-9xl',
      heroSubtitleSize: 'text-3xl 2xl:text-4xl',
      sectionTitleSize: 'text-6xl 2xl:text-7xl',
      bodyTextSize: 'text-2xl 2xl:text-3xl',
      sectionPadding: 'py-32 2xl:py-40',
      containerPadding: 'px-16 2xl:px-20',
      elementSpacing: 'space-y-12 2xl:space-y-16',
      maxWidth: 'max-w-6xl 2xl:max-w-7xl',
      gridGap: 'gap-12 2xl:gap-16',
      animationDuration: 0.8,
      animationDelay: 0.3,
      particleCount: 300,
      effectComplexity: 'enhanced',
    },
  };
  
  return configs[deviceInfo.screenCategory];
}
