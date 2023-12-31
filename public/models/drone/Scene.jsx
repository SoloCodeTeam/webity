/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 scene.gltf 
Author: Kira (https://sketchfab.com/GalaninaKira)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/drone-eac2b4bc20f54b3ba8c3ddbcdf03c8d6
Title: Drone
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.grey} />
        <lineSegments geometry={nodes.Object_9.geometry} material={materials.grey} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.grey} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
