import React from "react";
import { useGLTF } from "@react-three/drei";

export function BookCart(props) {
  const { scene } = useGLTF("/models/optimized_cart.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/optimized_cart.glb");
