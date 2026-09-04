'use client';

import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface EngineMeshProps {
  url: string;
}

function EngineMesh({ url }: EngineMeshProps) {
  const { scene } = useGLTF(url);
  const rotatingGroupRef = useRef<THREE.Group>(null);

  // Apply high-performance graphite/gunmetal material treatment
  const configuredScene = useMemo(() => {
    const cloned = scene.clone();

    const gunmetalMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#3a414e'),
      metalness: 0.85,
      roughness: 0.32,
    });

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = gunmetalMaterial;
      }
    });

    return cloned;
  }, [scene]);

  // Guaranteed continuous 60fps smooth rotation that NEVER stops when scrolling or interacting
  useFrame((_, delta) => {
    if (rotatingGroupRef.current) {
      rotatingGroupRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <group ref={rotatingGroupRef}>
      <Center>
        <primitive object={configuredScene} />
      </Center>
    </group>
  );
}

// Preload the GLB asset
useGLTF.preload('/models/Final-assembly.glb');

export const EngineModel: React.FC = () => {
  return (
    <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[660px] xl:h-[720px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
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
          frameloop="always"
          camera={{ position: [3.2, 2.0, 4.0], fov: 42 }}
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
          {/* Crisp, lag-free studio lighting with metallic depth and edge highlights */}
          <ambientLight intensity={1.1} />
          
          {/* Key light from top right */}
          <directionalLight position={[6, 9, 6]} intensity={2.6} color="#ffffff" />
          
          {/* Soft fill light from front left */}
          <directionalLight position={[-6, 4, 5]} intensity={1.5} color="#d5e0ee" />
          
          {/* Rim light for back silhouette separation */}
          <directionalLight position={[-5, 6, -6]} intensity={2.0} color="#90b0d8" />
          
          {/* Warm engineering-gold bounce underfill */}
          <directionalLight position={[0, -6, 3]} intensity={0.7} color="#cca43b" />

          {/* 3D Engine with continuous delta-driven rotation */}
          <EngineMesh url="/models/Final-assembly.glb" />

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
