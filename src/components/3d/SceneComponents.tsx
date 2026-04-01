"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const PARTICLES_COUNT = 1000;
const PARTICLE_POSITIONS = new Float32Array(PARTICLES_COUNT * 3);
for (let i = 0; i < PARTICLES_COUNT; i++) {
  PARTICLE_POSITIONS[i * 3] = (Math.random() - 0.5) * 10;
  PARTICLE_POSITIONS[i * 3 + 1] = (Math.random() - 0.5) * 10;
  PARTICLE_POSITIONS[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

export function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#121212"
            emissive="#ffffff"
            emissiveIntensity={0.15}
            roughness={0.2}
            metalness={0.9}
            distort={0.3}
            speed={1.5}
          />
      </mesh>
    </Float>
  );
}

export function BackgroundParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLES_COUNT}
          array={PARTICLE_POSITIONS}
          itemSize={3}
        />
      </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color="#ffffff"
          transparent
          opacity={0.15}
          sizeAttenuation
        />
    </points>
  );
}
