/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 EZ.gltf 
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/EZ.gltf');
  return (
    <group {...props} dispose={null}>
      <group scale={0.687}>
        <mesh geometry={nodes.Cube019.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Cube019_1.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Cube019_2.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Cube019_3.geometry} material={materials['Material.019']} />
      </group>
    </group>
  );
}

useGLTF.preload('/EZ.gltf');
