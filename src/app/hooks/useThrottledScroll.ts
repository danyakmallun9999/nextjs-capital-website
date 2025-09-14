'use client';

import { useCallback, useRef } from 'react';

export function useThrottledScroll(callback: () => void, delay: number = 16) {
  const lastCall = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const throttledCallback = useCallback(() => {
    const now = Date.now();
    
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        lastCall.current = Date.now();
        callback();
      }, delay - (now - lastCall.current));
    }
  }, [callback, delay]);

  return throttledCallback;
}
