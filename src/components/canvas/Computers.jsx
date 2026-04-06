import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'
import CanvasLoader from '../Loader'

// 🔥 preload (keep this here)
useGLTF.preload('/desktop_pc/scene.gltf')

function Computers() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  const computer = useGLTF('/desktop_pc/scene.gltf')

  // 🔥 FIX: apply screen texture AFTER model loads
  useEffect(() => {
    const texture = new THREE.TextureLoader().load(
      '/desktop_pc/textures/Material.074_9_emissive.png'
    )

    computer.scene.traverse((child) => {
      if (child.isMesh) {
        // apply to ALL meshes (safe fallback)
        child.material.emissiveMap = texture
        child.material.emissive = new THREE.Color(0xffffff)
        child.material.emissiveIntensity = 1.5
      }
    })
  }, [computer])

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      
      {/* 🔥 reduce intensity */}
      <pointLight intensity={2}/>
      
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3.75, -2.2] : [0, -4, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas