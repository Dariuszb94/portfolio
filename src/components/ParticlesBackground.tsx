import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

// Floating code cube component
function CodeCube({
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
          color='#64ffda'
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// Floating geometric shapes
function CodeSphere({ position }: { position: [number, number, number] }) {
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
      <sphereGeometry args={[0.2, 12, 12]} />
      <meshBasicMaterial color='#82aaff' transparent opacity={0.2} wireframe />
    </mesh>
  );
}

// Octahedron shapes
function CodeOctahedron({ position }: { position: [number, number, number] }) {
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
      <meshBasicMaterial color='#c792ea' transparent opacity={0.25} wireframe />
    </mesh>
  );
}

// Main 3D scene
function Scene() {
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
      Array.from({ length: 6 }, () => ({
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
      Array.from({ length: 3 }, () => ({
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
      <pointLight position={[-10, -10, -10]} intensity={0.2} color='#64ffda' />

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
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

const ParticlesBackground = () => {
  return (
    <CanvasContainer>
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Scene />
      </Canvas>
    </CanvasContainer>
  );
};

export default ParticlesBackground;
