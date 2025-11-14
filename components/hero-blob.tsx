"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------- Stars (stay visible on light/dark UIs) ---------- */
function ThemeStars({
  count = 5000,
  radius = 100,
}: {
  count?: number;
  radius?: number;
}) {
  const starColor = "rgb(40,40,40)";

  const { positions } = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.45 + 0.55 * Math.random());
      const t = Math.acos(2 * Math.random() - 1);
      const ph = 2 * Math.PI * Math.random();
      p[i * 3 + 0] = r * Math.sin(t) * Math.cos(ph);
      p[i * 3 + 1] = r * Math.sin(t) * Math.sin(ph);
      p[i * 3 + 2] = r * Math.cos(t);
    }
    return { positions: p };
  }, [count, radius]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.6}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
        color={new THREE.Color(starColor)}
      />
    </points>
  );
}

/* ---------- NASAH Globe (logo-style colors, rightward spin) ---------- */
type GlobeProps = {
  size?: number;
  ringInner?: number;
  ringOuter?: number;
  tilt?: number; // radians
  spinSpeed?: number; // radians/sec (positive = left, negative = right)
};

/* --- helpers: pill background + logo text lockup --- */
function Pill({
  width = 2.0,
  height = 0.52,
  radius = 0.26,
  color = "#1749C6",
  opacity = 0.95,
  position = [0, 0, 0],
}: {
  width?: number;
  height?: number;
  radius?: number;
  color?: string;
  opacity?: number;
  position?: [number, number, number];
}) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const w = width,
      h = height,
      r = Math.min(radius, width / 2, height / 2);
    // rounded-rectangle path centered at (0,0)
    s.moveTo(-w / 2 + r, -h / 2);
    s.lineTo(w / 2 - r, -h / 2);
    s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
    s.lineTo(w / 2, h / 2 - r);
    s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
    s.lineTo(-w / 2 + r, h / 2);
    s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
    s.lineTo(-w / 2, -h / 2 + r);
    s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
    return s;
  }, [width, height, radius]);

  return (
    <mesh position={position as any} renderOrder={10}>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

function LogoText({
  size,
  yOffset = 0.0, // 0 = center of sphere
}: {
  size: number;
  yOffset?: number;
}) {
  const y = size * yOffset;
  const zBump = size * 0.02; // nudge toward camera to avoid z-fighting

  // return (
  //   <group position={[0, y, zBump]}>
  //     {/* NASAH (bigger, white, subtle outline) */}
  //     <Text
  //       anchorX="center"
  //       anchorY="bottom"
  //       fontSize={0.78}
  //       letterSpacing={0.02}
  //       color="#ffffff"
  //       material-toneMapped={false}
  //       material-depthTest={false}
  //       material-depthWrite={false}
  //       renderOrder={10}
  //       outlineWidth={0.02}
  //       outlineColor="#1b1b1b"
  //     >
  //       NASAH
  //     </Text>

  //     {/* GROUP pill + text */}
  //     <group position={[0, -0.54, 0]}>
  //       <Pill width={1.8} height={0.44} radius={0.22} />
  //       <Text
  //         anchorX="center"
  //         anchorY="middle"
  //         fontSize={0.32}
  //         letterSpacing={0.06}
  //         color="#ffffff"
  //         material-toneMapped={false}
  //         material-depthTest={false}
  //         material-depthWrite={false}
  //         renderOrder={10}
  //       >
  //         GROUP
  //       </Text>
  //     </group>
  //   </group>
  // );
}

function NasahGlobe({
  size = 2.2,
  ringInner = 2.5,
  ringOuter = 3.7,
  tilt = -0.55,
  spinSpeed = -0.18, // negative -> appears to rotate to the RIGHT
}: GlobeProps) {
  const group = useRef<THREE.Group | null>(null);

  // Brand-ish colors (close to the logo):
  const COL_TOP = "#7DB8FF";
  const COL_MID = "#357AE8";
  const COL_SHADOW = "#2B2B2B";
  const RING = "#AEB7C7";

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * spinSpeed;
  });

  // Smooth vertical gradient (top -> mid -> shadow)
  const material = useMemo(() => {
    const uTop = new THREE.Color(COL_TOP);
    const uMid = new THREE.Color(COL_MID);
    const uBot = new THREE.Color(COL_SHADOW);
    const uniforms = {
      uTop: { value: uTop },
      uMid: { value: uMid },
      uBot: { value: uBot },
      uSize: { value: size },
    };

    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec3 vPos;
        void main(){
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPos;
        uniform vec3 uTop;
        uniform vec3 uMid;
        uniform vec3 uBot;
        uniform float uSize;
        void main(){
          float t = clamp((vPos.y + uSize) / (2.0 * uSize), 0.0, 1.0);
          vec3 c = mix(uMid, uTop, smoothstep(0.55, 1.0, t));
          c = mix(uBot, c, smoothstep(0.0, 0.55, t));
          gl_FragColor = vec4(c, 1.0);
        }
      `,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  return (
    <group ref={group}>
      {/* Sphere with gradient & faint atmosphere */}
      <Float speed={1.05} rotationIntensity={0.35} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[size, 96, 96]} />
          <primitive object={material as any} attach="material" />
        </mesh>

        {/* soft glow */}
        <mesh scale={1.06}>
          <sphereGeometry args={[size, 64, 64]} />
          <meshBasicMaterial color={COL_TOP} transparent opacity={0.08} />
        </mesh>

        {/* Text lockup INSIDE the globe (always visible, centered) */}
        {/* <LogoText size={size} yOffset={0.0} /> */}
      </Float>

      {/* Saturn-like ring, tilted like the logo */}
      <mesh rotation={[tilt, 0, 0]}>
        <ringGeometry args={[ringInner, ringOuter, 128]} />
        <meshStandardMaterial
          color={RING}
          roughness={0.35}
          metalness={0.35}
          side={THREE.DoubleSide}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

/* ---------- Scene ---------- */
export default function HeroSpace() {
  return (
    <div className="absolute inset-0 -z-10 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-6, -3, -2]} intensity={0.5} />

        {/* Background */}
        <ThemeStars count={6000} radius={110} />

        {/* NASAH logo-style globe */}
        <NasahGlobe
          size={2.3}
          ringInner={2.55}
          ringOuter={3.8}
          tilt={-0.6}
          spinSpeed={-0.2} // negative so it rotates to the RIGHT
        />

        {/* Camera auto orbit (very subtle) */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.25} />
      </Canvas>
    </div>
  );
}
