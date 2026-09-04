'use client';

import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface EngineMeshProps {
  url: string;
  isFocused: boolean;
}

function EngineMesh({ url, isFocused }: EngineMeshProps) {
  const { scene } = useGLTF(url);
  const rotatingGroupRef = useRef<THREE.Group>(null);

  // Apply bright, refined metallic titanium / polished alloy material treatment
  const configuredScene = useMemo(() => {
    const cloned = scene.clone();

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#646d7c'),
      metalness: 0.78,
      roughness: 0.24,
    });

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = titaniumMaterial;
      }
    });

    return cloned;
  }, [scene]);

  // Slower, majestic rotation speed (0.2) that pauses automatically when out of focus / scrolled out of view
  useFrame((_, delta) => {
    if (isFocused && rotatingGroupRef.current) {
      rotatingGroupRef.current.rotation.y += delta * 0.20;
    }
  });

  return (
    <group ref={rotatingGroupRef} scale={1.22}>
      <Center>
        <primitive object={configuredScene} />
      </Center>
    </group>
  );
}

// Preload the GLB asset
useGLTF.preload('/models/Final-assembly.glb');

export const EngineModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const [isTabActive, setIsTabActive] = useState(true);

  // Stop revolution when out of viewport or tab is inactive to optimize performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibilityChange = () => {
      setIsTabActive(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const isFocused = isInView && isTabActive;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[540px] sm:h-[650px] lg:h-[780px] xl:h-[860px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
    >
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center gap-3 text-slate-400 font-mono text-xs">
            <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-gold animate-spin" />
            <span className="tracking-widest uppercase text-[10px]">
              Loading Engine Model...
            </span>
          </div>
        }
      >
        <Canvas
          frameloop={isFocused ? 'always' : 'demand'}
          camera={{ position: [2.9, 1.8, 3.5], fov: 38 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
          }}
          dpr={[1, 1.25]}
          className="w-full h-full pointer-events-auto"
        >
          {/* Enhanced studio lighting setup: bright, clear, and high-contrast */}
          <ambientLight intensity={1.7} />
          
          {/* Key light from top right */}
          <directionalLight position={[5, 8, 5]} intensity={3.8} color="#ffffff" />
          
          {/* Front camera fill light for sharp surface clarity */}
          <directionalLight position={[0, 3, 6]} intensity={2.6} color="#ffffff" />
          
          {/* Soft cool fill light from side */}
          <directionalLight position={[-6, 3, 4]} intensity={2.2} color="#e2ebf8" />
          
          {/* Rim light for distinct silhouette & bevel edge separation */}
          <directionalLight position={[-5, 6, -5]} intensity={2.6} color="#c5daf8" />
          
          {/* Warm engineering-gold specular bounce */}
          <directionalLight position={[2, -4, 3]} intensity={1.1} color="#e5ba48" />

          {/* Scaled and centered 3D Engine with slower, focus-aware rotation */}
          <EngineMesh url="/models/Final-assembly.glb" isFocused={isFocused} />

          {/* Interactive controls: Rotate & Pan enabled, Zoom disabled to protect natural scroll */}
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.06}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};
