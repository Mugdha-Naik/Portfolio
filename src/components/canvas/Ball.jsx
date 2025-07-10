import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import{
  Decal, Float, OrbitControls, Preload, useTexture
  } from '@react-three/drei'
  
import CanvasLoader from '../Loader'


function Ball(props) {
  console.log('Ball imgUrl:', props.imgUrl);
  // Provide a fallback image if props.imgUrl is missing
  const imgUrl = props.imgUrl || '/fallback.png'; // Make sure fallback.png exists in public/assets
  const [decal] = useTexture([props.imgUrl]); // props.imgUrl = "/tech/html.png"

  return (
    <Float speed={.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial color='#fff8eb' polygonOffsetFactor={-5} flatShading/>
        <Decal
          position={[0,0,1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  console.log('BallCanvas icon:', icon);
  return(
    <Canvas
      frameloop='demand'
      
      gl= {{preserveDrawingBuffer: true}}>
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls enableZoom={false}
          />

          <Ball imgUrl={icon}/>
        </Suspense>

        <Preload all/>
    </Canvas>
  )
}

export default BallCanvas