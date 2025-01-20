import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import logoTexture from "../assets/logo.png"; 
import { ReactTyped } from "react-typed"; // Correct named import

const RotatingCube = () => {
  const texture = useLoader(THREE.TextureLoader, logoTexture);
  const meshRef = useRef();

  return (
    <Canvas className="h-80 mx-auto"> {/* Increased height for better visibility */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef} rotation={[0, 0, 0]}>  {/* Set rotation to zero */}
        <boxGeometry args={[4, 4, 4]} />  {/* Larger cube size */}
        <meshStandardMaterial map={texture} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};


const Home = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center text-center">
      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Will Nickles Portfolio</h1>
        <ReactTyped
          strings={[
            "Software Developer.",
            "Full-Stack Engineer.",
            "Tech Enthusiast.",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-3xl"
        />
        <p className="mt-4 text-lg">Explore my work and achievements below. Scroll for more!</p>
      </div>
      <div className="mt-12 relative z-10">
        <RotatingCube />
      </div>
    </section>
  );
};

export default Home;
