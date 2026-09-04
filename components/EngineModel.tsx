'use client';

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls, Environment, Bounds } from '@react-three/drei';
import * as THREE from 'three';

interface EngineMeshProps {
  url: string;
}

function EngineMesh({ url }: EngineMeshProps) {
  const { scene } = useGLTF(url);

  // Apply subtle professional dark graphite / gunmetal metallic material treatment
  const configuredScene = useMemo(() => {
    const cloned = scene.clone();

    const gunmetalMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#3c4350'),
      metalness: 0.88,
      roughness: 0.30,
      envMapIntensity: 1.2,
    });

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = gunmetalMaterial;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    return cloned;
  }, [scene]);

  return <primitive object={configuredScene} />;
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
          camera={{ position: [2.5, 1.8, 3.2], fov: 40 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
          className="w-full h-full"
        >
          {/* Studio lighting setup for metallic depth and sharp CAD edge highlights */}
          <ambientLight intensity={0.8} />
          
          {/* Key light */}
          <directionalLight position={[6, 8, 5]} intensity={2.4} color="#ffffff" />
          
          {/* Rim light for silhouette separation */}
          <directionalLight position={[-6, 5, -5]} intensity={1.8} color="#dbe4f0" />
          
          {/* Subtle warm engineering-gold underfill */}
          <directionalLight position={[0, -5, 4]} intensity={0.5} color="#cca43b" />
          
          {/* Studio environment for realistic metallic reflections */}
          <Environment preset="city" environmentIntensity={0.7} />

          {/* Bounds automatically fits the camera to the maximum bounding box size */}
          <Bounds fit clip observe margin={1.05}>
            <Center>
              <EngineMesh url="/models/Final-assembly.glb" />
            </Center>
          </Bounds>

          {/* OrbitControls: Keeps revolving, allows interactive rotate and pan, with zoom disabled */}
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={1.8}
            enablePan={true}
            enableRotate={true}
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};
