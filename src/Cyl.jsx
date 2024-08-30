import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Cyl = () => {
    let tex = useTexture('./threejs.png')
    let cls = useRef(null)

    useFrame((states , delta) => {
      cls.current.rotation.y += delta

    })
   


  return (
    <group rotation={[0 , 1.4 , 0.5]} >
    <mesh ref={cls} >
        <cylinderGeometry args={[2,2,2,60,60,true]}/>
        {/* <boxGeometry/> */}
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide}/>
      </mesh>
      </group>
  )
}

export default Cyl