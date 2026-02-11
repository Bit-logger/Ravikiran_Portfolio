"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, MeshDistortMaterial, Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useTheme } from "@/components/providers/ThemeProvider";

function BrainNode({ position, color, speed, vibrantColor }: { position: [number, number, number], color: string, speed: number, vibrantColor: string }) {
    const meshRef = useRef<any>(null);
    const [hovered, setHovered] = useState(false);
    const { isVibrant } = useTheme();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += speed;
            meshRef.current.rotation.y += speed;
        }
    });

    const activeColor = isVibrant ? vibrantColor : color;

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={meshRef}
                position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={hovered ? 1.2 : 1}
            >
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color={hovered ? (isVibrant ? "#ffffff" : "#000000") : activeColor}
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

export function HeroScene() {
    return (
        <div className="h-[400px] w-full md:h-[600px] absolute top-10 right-0 -z-10 opacity-50 md:opacity-100 mix-blend-screen pointer-events-none md:pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#dedede" />

                {/* Central "Core" */}
                <BrainNode position={[0, 0, 0]} color="#000000" vibrantColor="#7c3aed" speed={0.01} />

                {/* Surrounding Nodes */}
                <BrainNode position={[-2, 1, -1]} color="#52525b" vibrantColor="#4d4dff" speed={0.02} />
                <BrainNode position={[2, -1, -2]} color="#a1a1aa" vibrantColor="#00f0ff" speed={0.015} />
                <BrainNode position={[0, 2, -2]} color="#27272a" vibrantColor="#ccff00" speed={0.01} />
            </Canvas>
        </div>
    );
}
