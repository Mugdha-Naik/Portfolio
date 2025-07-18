import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Loader'

function Earth() {

  const earth=useGLTF('./planet/scene.gltf')  
  return (
    <>
        <primitive 
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
        />
    </>
  )
}

const EarthCanvas = () => {
  return(
    <Canvas 
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
       position: [-4, 3, 6], 
       fov: 45,
       near: 0.1,
       far:200,
  }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader/>}>

          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}/>

            <Earth/>

      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas