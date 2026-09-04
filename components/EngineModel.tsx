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

  // Apply bright, refined metallic titanium / polished alloy material treatment
  const configuredScene = useMemo(() => {
    const cloned = scene.clone();

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#626b7a'),
      metalness: 0.78,
      roughness: 0.25,
    });

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = titaniumMaterial;
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
    <group ref={rotatingGroupRef} scale={1.5}>
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
    <div className="relative w-full h-[480px] sm:h-[580px] lg:h-[680px] xl:h-[760px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
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
          camera={{ position: [2.3, 1.4, 2.8], fov: 38 }}
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
          <ambientLight intensity={1.6} />
          
          {/* Key light from top right */}
          <directionalLight position={[5, 8, 5]} intensity={3.6} color="#ffffff" />
          
          {/* Front camera fill light for sharp surface clarity */}
          <directionalLight position={[0, 3, 6]} intensity={2.4} color="#ffffff" />
          
          {/* Soft cool fill light from side */}
          <directionalLight position={[-6, 3, 4]} intensity={2.0} color="#e2ebf8" />
          
          {/* Rim light for distinct silhouette & bevel edge separation */}
          <directionalLight position={[-5, 6, -5]} intensity={2.5} color="#c5daf8" />
          
          {/* Warm engineering-gold specular bounce */}
          <directionalLight position={[2, -4, 3]} intensity={1.0} color="#e5ba48" />

          {/* Scaled and centered 3D Engine with continuous delta-driven rotation */}
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
