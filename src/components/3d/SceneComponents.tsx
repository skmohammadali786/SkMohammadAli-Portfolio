"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

export function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#121212"
            emissive="#ffffff"
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.9}
            distort={0.4}
            speed={2}
          />
      </mesh>
    </Float>
  );
}

export function BackgroundParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 1000;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color="#ffffff"
          transparent
          opacity={0.2}
          sizeAttenuation
        />
    </points>
  );
}
