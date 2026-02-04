"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { HeroObject, BackgroundParticles } from "./SceneComponents";
import { Environment, ContactShadows } from "@react-three/drei";

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#080808]">
      {mounted && !isMobile && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ 
            antialias: false, 
            alpha: true, 
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          dpr={[1, 1.5]}
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
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
}
