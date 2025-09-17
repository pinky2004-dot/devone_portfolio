import React from "react";
import { useGLTF } from "@react-three/drei";

export function BookCart(props) {
  const { scene } = useGLTF("/models/cart.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/cart.glb");
