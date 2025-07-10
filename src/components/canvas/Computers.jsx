import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'
function Computers() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    //set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches)

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    //Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  

  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={7}/>
      <spotLight position={[ -20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapsize={1024}/>
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.65 : 0.75}
      position={isMobile ? [0,-3.75, -2.2 ] : [0,-4,-1.5]}
      rotation= {[-0.01, -0.2, 0]}/>

    </mesh>
  )
}

const ComputersCanvas = ({isMobile}) => {
  return (
    <Canvas
      frameloop='demand'
      shadows 
      camera = {{position: [20, 3, 5], fov: 25}}
      gl= {{preserveDrawingBuffer: true}}>
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          />

          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas