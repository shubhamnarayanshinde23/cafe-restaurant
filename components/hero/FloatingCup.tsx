"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function FloatingCup() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.15;

    ref.current.rotation.x =
      state.pointer.y * 0.25;

    ref.current.rotation.z =
      state.pointer.x * 0.25;
  });

  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[1, 0.8, 1.8, 64]} />
      <meshStandardMaterial
        color="#D4A373"
        metalness={0.2}
        roughness={0.3}
      />
    </mesh>
  );
}