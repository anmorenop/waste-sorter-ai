import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Heart from './components/Heart'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 25], fov: 45 }}
      >
        {/* Iluminación */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        
        {/* Corazón */}
        <Heart position={[0, 10, 0]} />
        
        {/* Controles */}
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={10}
          maxDistance={50}
        />
        
        {/* Ambiente */}
        <Environment preset="sunset" />
       
      </Canvas>
    </div>
  )
}