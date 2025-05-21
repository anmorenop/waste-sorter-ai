import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {Box} from "@react-three/drei";
import './App.css'


const Figure = () => {
    const mesh = useRef();

    return (
        <Box ref={mesh} args={[1, 1, 1]}>
            <meshStandardMaterial color="hotpink" />
        </Box>
    );
};

const App = () => {
    return (
        <Canvas shadows style={{width: '100vw', height: '100vh'}} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Figure />
        </Canvas>
    );
};

export default App
