"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

/** Винтовая спираль из сфер — визуальная метафора спирального переплёта. */
function Helix() {
  const group = useRef<THREE.Group>(null);

  const beads = useMemo(() => {
    const count = 34;
    const turns = 3.2;
    const radius = 1.55;
    const height = 5.2;
    return Array.from({ length: count }, (_, i) => {
      const t = i / (count - 1);
      const angle = t * turns * Math.PI * 2;
      return {
        position: [
          Math.cos(angle) * radius,
          (t - 0.5) * height,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale: 0.26 + Math.sin(t * Math.PI) * 0.12,
      };
    });
  }, []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame((_, delta) => {
    if (group.current && !reduceMotion) {
      group.current.rotation.y += delta * 0.28;
    }
  });

  return (
    <group ref={group} rotation={[0.15, 0, 0.08]}>
      {beads.map((bead, i) => (
        <mesh key={i} position={bead.position} scale={bead.scale} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={i % 6 === 0 ? "#6d5cff" : "#1d1d20"}
            roughness={0.25}
            metalness={0.55}
          />
        </mesh>
      ))}
      {/* Центральная ось спирали */}
      <mesh>
        <cylinderGeometry args={[0.035, 0.035, 5.6, 16]} />
        <meshStandardMaterial
          color="#6d5cff"
          roughness={0.2}
          metalness={0.6}
          emissive="#6d5cff"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

export default function SpiralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#8b7dff" />
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <Helix />
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}
