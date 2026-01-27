"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroObject, BackgroundParticles } from "./SceneComponents";
import { Environment, ContactShadows } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#080808]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#080808"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <Suspense fallback={null}>
          <HeroObject />
          <BackgroundParticles />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4.5}
          />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
}
