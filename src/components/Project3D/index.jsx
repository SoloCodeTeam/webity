import "./style.css"
import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF,useAnimations} from "@react-three/drei"

export function Model1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/clock/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="clockfbx" rotation={[Math.PI / 2, 0, 0]} scale={2}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Plane002" position={[0.234, 14.998, 0]} rotation={[-2.951, 0, 0]} scale={2}>
                  <mesh name="Plane002_metal_0" geometry={nodes.Plane002_metal_0.geometry} material={materials.metal} />
                </group>
                <group name="Plane003" position={[0.121, 14.998, 0]} rotation={[-0.966, 0, 0]} scale={2}>
                  <mesh name="Plane003_metal_0" geometry={nodes.Plane003_metal_0.geometry} material={materials.metal} />
                </group>
                <group name="Plane" position={[0, 14.998, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                  <mesh name="Plane_Material_0" geometry={nodes.Plane_Material_0.geometry} material={materials.Material} />
                </group>
                <group name="Cylinder" position={[0, 15.122, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                  <mesh name="Cylinder_metal_0" geometry={nodes.Cylinder_metal_0.geometry} material={materials.metal} />
                </group>
                <group name="Plane001" position={[0.892, 14.998, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                  <mesh name="Plane001_Material001_0" geometry={nodes.Plane001_Material001_0.geometry} material={materials['Material.001']} />
                </group>
                <group name="Cylinder001" position={[0.038, 14.998, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                  <mesh name="Cylinder001_metal_0" geometry={nodes.Cylinder001_metal_0.geometry} material={materials.metal} />
                </group>
                <group name="Plane004" position={[0, 15.006, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                  <mesh name="Plane004_metal_0" geometry={nodes.Plane004_metal_0.geometry} material={materials.metal} />
                </group>
                <group name="Plane005" position={[0, 14.994, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                  <mesh name="Plane005_metal_0" geometry={nodes.Plane005_metal_0.geometry} material={materials.metal} />
                </group>
                <group name="Cube" position={[0.038, 14.998, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2}>
                  <mesh name="Cube_Material002_0" geometry={nodes.Cube_Material002_0.geometry} material={materials['Material.002']} />
                </group>
              </group>
            </group>
          </group>
        </group>
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
  const { nodes, materials } = useGLTF('models/pot/scene.gltf')
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
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5}/>
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model1 />
          </Canvas>
          <Canvas className="Canvas">
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5}/>
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model2/>
          </Canvas>
          <Canvas className="Canvas">
            <OrbitControls autoRotate={true} enableZoom={false} rotateSpeed={2} autoRotateSpeed={5}/>
            <ambientLight intensity={1.5} />
            <spotLight position={[10,15,10]} angle={0.3} />
            <Model3/>
          </Canvas>
        </div>
    )
}