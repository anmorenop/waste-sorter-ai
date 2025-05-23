import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Shape, ExtrudeGeometry } from 'three'

const Heart = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef()
  const hover = useRef(false)
  
  // 1. Creación de la forma del corazón
  const heartShape = useMemo(() => {
    const shape = new Shape()
    const x = 0, y = 0
    
    shape.moveTo(x + 5, y + 5)
    shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
    shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
    shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
    shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
    shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
    shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)
    
    return shape
  }, [])

  // 2. Geometría extruida
  const geometry = useMemo(() => new ExtrudeGeometry(heartShape, {
    depth: 2,
    bevelEnabled: true,
    bevelSize: 0.3,
    bevelThickness: 0.5
  }), [heartShape])

  // 3. Animación por fotograma
  useFrame(({ clock, mouse }) => {
    // Animación de color
    meshRef.current.material.color.setHSL(
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5, // H (tono)
      0.8, // S (saturación)
      hover.current ? 0.8 : 0.6 // L (luminosidad)
    )
    
    // Rotación con mouse
    meshRef.current.rotation.x = mouse.y * 0.5
    meshRef.current.rotation.y = mouse.x * 0.5
  })

  return (
    <mesh 
      ref={meshRef}
      position={position}
      rotation={[-Math.PI / 2, 0, Math.PI]}
    //   rotation={[Math.PI/2, Math.PI, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
      castShadow
    >
      <primitive object={geometry} attach="geometry" />
      <meshStandardMaterial 
        metalness={0.3}
        roughness={0.2}
        emissive={0xff0000}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export default Heart