import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef, useMemo, memo } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

// Floating code cube component - Memoized for performance
const CodeCube = memo(function CodeCube({
  position,
  rotationSpeed,
}: {
  position: [number, number, number];
  rotationSpeed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * 0.3;
      meshRef.current.rotation.y += rotationSpeed * 0.2;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshBasicMaterial
          color={colors.accent.primary}
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
});

// Floating geometric shapes - Memoized for performance
const CodeSphere = memo(function CodeSphere({
  position,
}: {
  position: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.x =
        position[0] + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshBasicMaterial
        color={colors.accent.secondary}
        transparent
        opacity={0.2}
        wireframe
      />
    </mesh>
  );
});

// Octahedron shapes - Memoized for performance
const CodeOctahedron = memo(function CodeOctahedron({
  position,
}: {
  position: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      meshRef.current.position.z =
        position[2] + Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.25]} />
      <meshBasicMaterial
        color={colors.accent.tertiary}
        transparent
        opacity={0.25}
        wireframe
      />
    </mesh>
  );
});

// Main 3D scene - Optimized for performance
const Scene = memo(function Scene() {
  const cubes = useMemo(
    () =>
      Array.from({ length: 4 }, () => ({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
        ] as [number, number, number],
        rotationSpeed: 0.002 + Math.random() * 0.005,
      })),
    []
  );

  const spheres = useMemo(
    () =>
      Array.from({ length: 5 }, () => ({
        // Reduced from 3 to 2
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
        ] as [number, number, number],
      })),
    []
  );

  const octahedrons = useMemo(
    () =>
      Array.from({ length: 2 }, () => ({
        position: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
      })),
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Floating code cubes */}
      {cubes.map((cube, index) => (
        <CodeCube
          key={`cube-${index}`}
          position={cube.position}
          rotationSpeed={cube.rotationSpeed}
        />
      ))}

      {/* Floating symbol spheres */}
      {spheres.map((sphere, index) => (
        <CodeSphere key={`sphere-${index}`} position={sphere.position} />
      ))}

      {/* Floating octahedrons */}
      {octahedrons.map((oct, index) => (
        <CodeOctahedron key={`oct-${index}`} position={oct.position} />
      ))}

      {/* Subtle camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
});

const ParticlesBackground = memo(function ParticlesBackground() {
  return (
    <CanvasContainer>
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45, // Reduced FOV for better performance
          near: 0.1,
          far: 50, // Reduced far plane
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
        dpr={1} // Fixed pixel ratio for consistent performance
        performance={{ min: 0.5 }}
        frameloop='demand' // Only render when needed
      >
        <Scene />
      </Canvas>
    </CanvasContainer>
  );
});

export default ParticlesBackground;
