import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function Model(){

  return(
    <mesh rotation={[0.5,0.5,0]}>

      <torusKnotGeometry args={[1,0.3,100,16]}/>

      <meshStandardMaterial 
        color="#06b6d4"
        metalness={0.8}
        roughness={0.2}
      />

    </mesh>
  )

}



function HeroCanvas(){

return(

<Canvas>

<ambientLight intensity={2}/>

<directionalLight position={[3,3,3]}/>


<Model/>


<OrbitControls 
enableZoom={false}
/>


</Canvas>

)

}


export default HeroCanvas;