import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'
import * as THREE from 'three'

function Earth() {
  const mesh = useRef<Mesh>(null)
  useFrame((_, dt) => {
    if (mesh.current) mesh.current.rotation.y += dt * 0.08
  })

  return (
    <mesh ref={mesh} scale={1.15}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshStandardMaterial
        color="#3a352c"
        emissive="#1c1914"
        emissiveIntensity={0.1}
        metalness={0.15}
        roughness={0.8}
        wireframe={false}
      />
      <mesh scale={1.01}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#B4573D"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </mesh>
  )
}

function OrbitalRings() {
  const group = useRef<Group>(null)
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.z += dt * 0.05
  })

  return (
    <group ref={group} rotation={[0.6, 0.2, 0]}>
      <mesh>
        <torusGeometry args={[1.85, 0.008, 8, 120]} />
        <meshBasicMaterial color="#B4573D" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[2.15, 0.006, 8, 120]} />
        <meshBasicMaterial color="#68645D" transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

function Satellite() {
  const ref = useRef<Group>(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * 0.25
    ref.current.position.set(Math.cos(t) * 2.15, Math.sin(t * 0.6) * 0.35, Math.sin(t) * 2.15)
    ref.current.lookAt(0, 0, 0)
  })

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.12, 0.08, 0.08]} />
        <meshStandardMaterial color="#68645D" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0.16, 0, 0]}>
        <boxGeometry args={[0.16, 0.02, 0.1]} />
        <meshStandardMaterial color="#B4573D" emissive="#B4573D" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-0.16, 0, 0]}>
        <boxGeometry args={[0.16, 0.02, 0.1]} />
        <meshStandardMaterial color="#858077" emissive="#858077" emissiveIntensity={0.1} />
      </mesh>
    </group>
  )
}

function Scene() {
  const fog = useMemo(() => new THREE.Fog('#E7E0D4', 4, 12), [])
  return (
    <>
      <color attach="background" args={['#E7E0D4']} />
      <fog attach="fog" args={[fog.color, fog.near, fog.far]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 2, 3]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, 1, -2]} intensity={0.4} color="#B4573D" />
      <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.25}>
        <Earth />
        <OrbitalRings />
        <Satellite />
      </Float>
    </>
  )
}

export function Scene3D() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-40 md:opacity-55">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.4, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
