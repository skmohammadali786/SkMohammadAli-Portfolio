"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { MorphingParticles } from "./SceneComponents";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return null; // As requested by AGENTS.md / memory for Scene.tsx (performance optimization)
  }

  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0e14]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMappingExposure: 2.5,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0a0e14"]} />
        <fogExp2 attach="fog" args={["#0a0e14", 0.02]} />

        {/* Lights */}
        <ambientLight color="#c8e6ff" intensity={3} />

        {/* Key Light */}
        <pointLight color="#38bdf8" intensity={15} distance={50} position={[3, 3, 4]} />
        
        {/* Fill Light */}
        <pointLight color="#6d28d9" intensity={8} distance={50} position={[-4, -2, 3]} />

        {/* Rim Light */}
        <pointLight color="#0e7fad" intensity={10} distance={50} position={[0, 4, -3]} />

        {/* Front Light */}
        <pointLight color="#e0f0ff" intensity={12} distance={40} position={[0, 0, 6]} />

        {/* Bottom Light */}
        <pointLight color="#38bdf8" intensity={8} distance={40} position={[0, -3, 3]} />

        <OrbitControls
          enableDamping={true}
          dampingFactor={0.04}
          autoRotate={true}
          autoRotateSpeed={0.4}
          enableZoom={false}
          enablePan={false}
        />

        <Suspense fallback={null}>
          <MorphingParticles />
        </Suspense>
      </Canvas>
    </div>
  );
}
