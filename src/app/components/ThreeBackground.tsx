'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useDeviceDetection } from '../hooks/useDeviceDetection';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

// Optimized Particles with Performance Scaling
function ElegantParticles({ count = 300, isLowEnd = false, shouldReduceAnimations = false }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    // Reduce particle count for low-end devices
    const actualCount = isLowEnd ? Math.min(count * 0.3, 100) : count;
    const temp = new Float32Array(actualCount * 3);
    for (let i = 0; i < actualCount; i++) {
      const i3 = i * 3;
      // More spread out, less dense
      temp[i3] = (Math.random() - 0.5) * 30;
      temp[i3 + 1] = (Math.random() - 0.5) * 30;
      temp[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    return temp;
  }, [count, isLowEnd]);

  useFrame((state) => {
    if (mesh.current && !shouldReduceAnimations) {
      // Very subtle rotation - skip on low performance
      mesh.current.rotation.y = state.clock.elapsedTime * (isLowEnd ? 0.01 : 0.02);
      
      // Gentle floating motion - reduce frequency for low-end devices
      if (!isLowEnd) {
        const positions = mesh.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + positions[i] * 0.1) * 0.001;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
      }
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={isLowEnd ? 0.015 : 0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isLowEnd ? 0.3 : 0.4}
      />
    </Points>
  );
}

// Minimal Geometric Accents (No Circles)
function GeometricAccents({ isLowEnd = false, shouldReduceAnimations = false }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && !shouldReduceAnimations) {
      // Very slow, elegant rotation - reduced for low-end
      groupRef.current.rotation.y = state.clock.elapsedTime * (isLowEnd ? 0.005 : 0.01);
      
      // Skip complex animations on low-end devices
      if (!isLowEnd) {
        groupRef.current.children.forEach((child, index) => {
          // Gentle floating with different phases
          child.position.y += Math.sin(state.clock.elapsedTime * 0.3 + index * 2) * 0.003;
          
          // Very subtle individual rotation
          child.rotation.x = Math.sin(state.clock.elapsedTime * 0.2 + index) * 0.1;
          child.rotation.z = Math.cos(state.clock.elapsedTime * 0.15 + index) * 0.1;
        });
      }
    }
  });

  // Don't render on very low-end devices
  if (isLowEnd) return null;

  return (
    <group ref={groupRef}>
      {/* Subtle diamond shape */}
      <mesh position={[-6, 2, -8]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#1e40af"
          transparent
          opacity={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.08}
          wireframe={true}
        />
      </mesh>

      {/* Small cube */}
      <mesh position={[7, -1, -6]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color="#7c3aed"
          transparent
          opacity={0.15}
          emissive="#7c3aed"
          emissiveIntensity={0.06}
          wireframe={true}
        />
      </mesh>
    </group>
  );
}

// Elegant Grid Lines
function ElegantGrid({ isLowEnd = false, shouldReduceAnimations = false }) {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current && !shouldReduceAnimations && !isLowEnd) {
      // Subtle opacity animation - skip on low performance
      gridRef.current.children.forEach((line, index) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
        material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.5) * 0.08;
      });
    }
  });

  const gridLines = useMemo(() => {
    // Reduce grid complexity for low-end devices
    const lines = [];
    const size = 20;
    const divisions = isLowEnd ? 4 : 8; // Fewer grid lines on low-end
    const step = size / divisions;

    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = -size / 2 + i * step;
      const points = [
        new THREE.Vector3(-size / 2, y, -15),
        new THREE.Vector3(size / 2, y, -15)
      ];
      lines.push(points);
    }

    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = -size / 2 + i * step;
      const points = [
        new THREE.Vector3(x, -size / 2, -15),
        new THREE.Vector3(x, size / 2, -15)
      ];
      lines.push(points);
    }

    return lines;
  }, [isLowEnd]);

  return (
    <group ref={gridRef}>
      {gridLines.map((points, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <primitive key={index} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: "#3b82f6",
            transparent: true,
            opacity: 0.15
          }))} />
        );
      })}
    </group>
  );
}

// Main Scene Component
function Scene({ scrollProgress, isLowEnd, shouldReduceAnimations }: { 
  scrollProgress: number; 
  isLowEnd: boolean; 
  shouldReduceAnimations: boolean; 
}) {
  const { camera } = useThree();
  const sceneRef = useRef<THREE.Group>(null);
  
  React.useEffect(() => {
    camera.position.set(0, 0, 12);
  }, [camera]);

  useFrame(() => {
    if (sceneRef.current && !shouldReduceAnimations) {
      // Very subtle parallax movement - reduced for low-end
      sceneRef.current.position.y = -scrollProgress * (isLowEnd ? 0.5 : 1);
      sceneRef.current.rotation.y = scrollProgress * (isLowEnd ? 0.05 : 0.1);
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Soft ambient lighting - reduced for low-end */}
      <ambientLight intensity={isLowEnd ? 0.2 : 0.3} />
      {!isLowEnd && (
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.2} 
          color="#3b82f6" 
        />
      )}
      
      {/* Minimal 3D Elements */}
      <ElegantParticles 
        count={isLowEnd ? 100 : 200} 
        isLowEnd={isLowEnd} 
        shouldReduceAnimations={shouldReduceAnimations} 
      />
      <GeometricAccents 
        isLowEnd={isLowEnd} 
        shouldReduceAnimations={shouldReduceAnimations} 
      />
      <ElegantGrid 
        isLowEnd={isLowEnd} 
        shouldReduceAnimations={shouldReduceAnimations} 
      />
    </group>
  );
}

// Fallback Component for unsupported devices
function FallbackBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-emerald-900/20" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />
    </div>
  );
}

// Main Component
export default function ThreeBackground() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const deviceInfo = useDeviceDetection();
  const performanceMetrics = usePerformanceMonitor();

  React.useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use fallback for unsupported or very low-end devices
  if (!deviceInfo.supportsWebGL || 
      deviceInfo.hasReducedMotion || 
      (deviceInfo.isLowEnd && deviceInfo.connectionSpeed === 'slow')) {
    return <FallbackBackground />;
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Suspense fallback={<FallbackBackground />}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 50 }}
          style={{ background: 'transparent' }}
          dpr={deviceInfo.isLowEnd ? 1 : (typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1)}
          gl={{ 
            alpha: true, 
            antialias: !deviceInfo.isLowEnd, // Disable antialiasing on low-end
            powerPreference: deviceInfo.isLowEnd ? "low-power" : "high-performance"
          }}
        >
          <Scene 
            scrollProgress={scrollProgress} 
            isLowEnd={deviceInfo.isLowEnd}
            shouldReduceAnimations={performanceMetrics.shouldReduceAnimations}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}