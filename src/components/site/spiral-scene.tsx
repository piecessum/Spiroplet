"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

/** Винтовая кривая для построения сплошной трубы-спирали. */
class HelixCurve extends THREE.Curve<THREE.Vector3> {
  constructor(
    private turns = 3.4,
    private radius = 1.55,
    private height = 6,
  ) {
    super();
  }
  getPoint(t: number, target = new THREE.Vector3()) {
    const angle = t * this.turns * Math.PI * 2;
    return target.set(
      Math.cos(angle) * this.radius,
      (t - 0.5) * this.height,
      Math.sin(angle) * this.radius,
    );
  }
}

function Spiral() {
  const group = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const curve = new HelixCurve();
    return new THREE.TubeGeometry(curve, 600, 0.17, 32, false);
  }, []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame((_, delta) => {
    if (group.current && !reduceMotion) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group} rotation={[0.12, 0, 0.06]}>
      <mesh geometry={geometry} castShadow>
        <meshStandardMaterial
          color="#6d5cff"
          roughness={0.22}
          metalness={0.6}
          emissive="#3a2fb0"
          emissiveIntensity={0.18}
        />
      </mesh>
    </group>
  );
}

export default function SpiralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 48 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} />
      <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#8b7dff" />
      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.5}>
        <Spiral />
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}
