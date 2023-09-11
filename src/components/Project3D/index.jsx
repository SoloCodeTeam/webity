import "./style.css"
import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF,useAnimations} from "@react-three/drei"

export function Model1(props) {
  const { nodes, materials } = useGLTF('/models/mouse/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}  scale={0.3}>
        <mesh geometry={nodes.R_Mouse_00_R_Mouse_0.geometry} material={materials.R_Mouse} position={[0, 3.403, 0.868]} />
      </group>
    </group>
  )
}
export function Model2(props) {
    const { nodes, materials } = useGLTF('/models/garbage/scene.gltf')
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group scale={[1, 1.06, 1]}>
              <mesh geometry={nodes.Object_4.geometry} material={materials.Mlleimer_Boden} />
              <mesh geometry={nodes.Object_5.geometry} material={materials.Mlleimer_Gitter_2} />
            </group>
          </group>
        </group>
      </group>
    )
}
export function Model3(props) {
  const { nodes, materials } = useGLTF('/models/iphone/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder_Material002_0.geometry} material={materials['Material.002']} position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    </group>
  )
}

export function Project3D(){
    return(
        <div className="Project3D">
          <Canvas className="Canvas">
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5} target={-0.061775,10,0}/>
            <ambientLight intensity={1.5} />
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5} target={[0,0,0]}/>
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model1 />
          </Canvas>
          <Canvas className="Canvas">
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5} target={-0.061775,10,0}/>
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model2/>
          </Canvas>
          <Canvas className="Canvas">
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5} target={-0.061775,10,0}/>
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model3/>
          </Canvas>
        </div>
    )
}