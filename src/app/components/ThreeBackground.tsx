'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Elegant Minimal Particles
function ElegantParticles({ count = 300 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // More spread out, less dense
      temp[i3] = (Math.random() - 0.5) * 30;
      temp[i3 + 1] = (Math.random() - 0.5) * 30;
      temp[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      // Very subtle rotation
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      
      // Gentle floating motion
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + positions[i] * 0.1) * 0.001;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// Minimal Geometric Accents (No Circles)
function GeometricAccents() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Very slow, elegant rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      
      groupRef.current.children.forEach((child, index) => {
        // Gentle floating with different phases
        child.position.y += Math.sin(state.clock.elapsedTime * 0.3 + index * 2) * 0.003;
        
        // Very subtle individual rotation
        child.rotation.x = Math.sin(state.clock.elapsedTime * 0.2 + index) * 0.1;
        child.rotation.z = Math.cos(state.clock.elapsedTime * 0.15 + index) * 0.1;
      });
    }
  });

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
function ElegantGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      // Subtle opacity animation
      gridRef.current.children.forEach((line, index) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
        material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.5) * 0.08;
      });
    }
  });

  const gridLines = useMemo(() => {
    const lines = [];
    const size = 20;
    const divisions = 8;
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
  }, []);

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
function Scene({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  const sceneRef = useRef<THREE.Group>(null);
  
  React.useEffect(() => {
    camera.position.set(0, 0, 12);
  }, [camera]);

  useFrame(() => {
    if (sceneRef.current) {
      // Very subtle parallax movement
      sceneRef.current.position.y = -scrollProgress * 1;
      sceneRef.current.rotation.y = scrollProgress * 0.1;
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Soft ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.2} 
        color="#3b82f6" 
      />
      
      {/* Minimal 3D Elements */}
      <ElegantParticles count={200} />
      <GeometricAccents />
      <ElegantGrid />
    </group>
  );
}

// Main Component
export default function ThreeBackground() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

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

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}