"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import FloatingCup from "./FloatingCup";

export default function CoffeeScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.5}
      >
        <FloatingCup />
      </Float>

      <Environment preset="city" />
    </Canvas>
  );
}