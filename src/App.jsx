import { Canvas  } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { OrbitControls } from '@react-three/drei'
import Cyl from './Cyl'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
// import { CylinderGeometry } from 'three'
// import * as THREE from 'three'

const App = () => {
  return (
    <>
    <Canvas flat camera={{fov : 60}}>
      <OrbitControls/>
      <ambientLight/>
      <Cyl/>
      <EffectComposer>
      <Bloom
      mipmapBlur
      intensity={2.0}
      luminanceThreshold={0}
      luminanceSmoothing={0}
      />
    </EffectComposer>
    <ToneMapping adaptive/>
    </Canvas>

    </>
   
  )
}
export default App