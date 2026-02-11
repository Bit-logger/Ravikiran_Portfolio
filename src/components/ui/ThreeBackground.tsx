"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

function Stars(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useMemo(() => {
        // Generate random points in a sphere
        const points = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const r = 1.5 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            points[i * 3] = x;
            points[i * 3 + 1] = y;
            points[i * 3 + 2] = z;
        }
        return [points];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8b5cf6" // Violet-500
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}
