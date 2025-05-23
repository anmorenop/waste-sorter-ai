// import { useMemo, useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Shape, ExtrudeGeometry } from 'three'

// const Heart = ({ position = [0, 0, 0] }) => {
//   const meshRef = useRef()
//   const hover = useRef(false)
  
//   // 1. Creación de la forma del corazón
//   const heartShape = useMemo(() => {
//     const shape = new Shape()
//     const x = 0, y = 0
    
//     shape.moveTo(x + 5, y + 5)
//     shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
//     shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
//     shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
//     shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
//     shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
//     shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)
    
//     return shape
//   }, [])

//   // 2. Geometría extruida
//   const geometry = useMemo(() => new ExtrudeGeometry(heartShape, {
//     depth: 2,
//     bevelEnabled: true,
//     bevelSize: 0.3,
//     bevelThickness: 0.5
//   }), [heartShape])

//   // 3. Animación por fotograma
//   useFrame(({ clock, mouse }) => {
//     // Animación de color
//     meshRef.current.material.color.setHSL(
//       Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5, // H (tono)
//       0.8, // S (saturación)
//       hover.current ? 0.8 : 0.6 // L (luminosidad)
//     )
    
//     // Rotación con mouse
//     meshRef.current.rotation.x = mouse.y * 0.5
//     meshRef.current.rotation.y = mouse.x * 0.5
//   })

//   return (
//     <mesh 
//       ref={meshRef}
//       position={position}
//       rotation={[-Math.PI / 2, 0, Math.PI]}
//     //   rotation={[Math.PI/2, Math.PI, 0]}
//       onPointerOver={() => (hover.current = true)}
//       onPointerOut={() => (hover.current = false)}
//       castShadow
//     >
//       <primitive object={geometry} attach="geometry" />
//       <meshStandardMaterial 
//         metalness={0.3}
//         roughness={0.2}
//         emissive={0xff0000}
//         emissiveIntensity={0.3}
//       />
//     </mesh>
//   )
// }

// export default Heart






// import { useMemo, useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { Shape, ExtrudeGeometry, Vector2 } from 'three';
// import { vertexShader, fragmentShader } from '../shaders/liquidShader';

// const Heart = ({ position = [0, 0, 0] }) => {
//   const meshRef = useRef();
//   const mouse = useRef(new Vector2(0.5, 0.5));

//   // Uniforms para los shaders
//   const uniforms = useMemo(() => ({
//     uTime: { value: 0 },
//     uMouse: { value: new Vector2(0.5, 0.5) },
//     uColor1: { value: new THREE.Color(0xff0066) }, // Rosa
//     uColor2: { value: new THREE.Color(0x00ffff) }  // Cyan
//   }), []);

//   // Animación y actualización de uniforms
//   useFrame(({ clock, mouse: r3fMouse }) => {
//     uniforms.uTime.value = clock.getElapsedTime();
    
//     // Actualizar posición del mouse (normalizada)
//     mouse.current.set(
//       (r3fMouse.x + 1) / 2,
//       (r3fMouse.y + 1) / 2
//     );
//     uniforms.uMouse.value = mouse.current;
//   });

//   // Creación de la geometría (igual que antes)
//   const heartShape = useMemo(() => { //     const shape = new Shape()
//     const x = 0, y = 0
    
//     shape.moveTo(x + 5, y + 5)
//     shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
//     shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
//     shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
//     shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
//     shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
//     shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)
    
//     return shape }, []);
//   const geometry = useMemo(() => new ExtrudeGeometry(heartShape, { depth: 2,
//     bevelEnabled: true,
//     bevelSize: 0.3,
//     bevelThickness: 0.5 
//   }), [heartShape]);

//   return (
//     <mesh
//       ref={meshRef}
//       position={position}
//       rotation={[Math.PI / 2, Math.PI, 0]}
//       onPointerMove={(e) => {
//         // Actualizar posición del mouse en el hover
//         mouse.current.set(
//           (e.uv.x + 1) / 2,
//           (e.uv.y + 1) / 2
//         );
//       }}
//     >
//       <primitive object={geometry} attach="geometry" />
//       <shaderMaterial
//         vertexShader={vertexShader}
//         fragmentShader={fragmentShader}
//         uniforms={uniforms}
//         transparent
//         wireframe={false}
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   );
// };

// export default Heart;



import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry, Vector2, Color, DoubleSide } from 'three';
import { vertexShader, fragmentShader } from '../shaders/liquidShader';

const Heart = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef();
  const mouse = useRef(new Vector2(0.5, 0.5));

  // Uniforms corregidos
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new Vector2(0.5, 0.5) },
    uColor1: { value: new Color(0xff0066) }, // Usando Color importado
    uColor2: { value: new Color(0x00ffff) }   // Usando Color importado
  }), []);

  // Creación de la geometría corregida
  const heartShape = useMemo(() => {
    const shape = new Shape(); // Añadido el new Shape()
    const x = 0, y = 0;
    
    shape.moveTo(x + 5, y + 5);
    shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
    
    return shape;
  }, []);

  const geometry = useMemo(() => new ExtrudeGeometry(heartShape, { 
    depth: 2,
    bevelEnabled: true,
    bevelSize: 0.3,
    bevelThickness: 0.5 
  }), [heartShape]);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[Math.PI / 2, Math.PI, 0]}
      onPointerMove={(e) => {
        mouse.current.set(
          (e.uv.x + 1) / 2,
          (e.uv.y + 1) / 2
        );
      }}
    >
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        wireframe={false}
        side={DoubleSide} // Usando DoubleSide importado
      />
    </mesh>
  );
};

export default Heart;




// import { useMemo, useRef, useEffect } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import { Shape, ExtrudeGeometry, Color, Vector2, DoubleSide } from 'three';
// import { vertexShader, fragmentShader } from '../shaders/liquidShader';

// const Heart = ({ position = [0, 0, 0] }) => {
//   const { size } = useThree();
//   const meshRef = useRef();
//   const mouse = useRef(new Vector2(0.5, 0.5));

//   // Uniforms para los shaders
//   const uniforms = useMemo(() => ({
//     uTime: { value: 0 },
//     uMouse: { value: new Vector2(0.5, 0.5) },
//     uColor1: { value: new Color(0xff0066) }, // Rosa intenso
//     uColor2: { value: new Color(0x33ccff) }  // Azul claro
//   }), []);

//   // Animación y actualización de uniforms
//   useFrame(({ clock, mouse: r3fMouse }) => {
//     uniforms.uTime.value = clock.getElapsedTime();
    
//     // Actualizar posición del mouse normalizada
//     mouse.current.set(
//       (r3fMouse.x * size.width) / size.width,
//       (r3fMouse.y * size.height) / size.height
//     );
//     uniforms.uMouse.value = mouse.current;
//   });

//   // Creación de la geometría con normales calculadas
//   const geometry = useMemo(() => {
//     const shape = new Shape();
//     const x = 0, y = 0;
    
//     shape.moveTo(x + 5, y + 5);
//     shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
//     shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
//     shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
//     shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
//     shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
//     shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

//     const geom = new ExtrudeGeometry(shape, {
//       depth: 2,
//       bevelEnabled: true,
//       bevelSize: 0.5,
//       bevelThickness: 1,
//       bevelSegments: 10
//     });
    
//     geom.computeVertexNormals(); // Cálculo crítico de normales
//     return geom;
//   }, []);

//   return (
//     <mesh
//       ref={meshRef}
//       position={position}
//       rotation={[Math.PI / 2, 0, Math.PI]}
//       scale={0.8}
//       onPointerMove={(e) => {
//         // Actualizar posición del mouse con coordenadas UV
//         mouse.current.set(
//           (e.uv.x + 1) / 2,
//           (e.uv.y + 1) / 2
//         );
//       }}
//     >
//       <bufferGeometry attach="geometry">
//         <primitive object={geometry} attach="attributes" />
//       </bufferGeometry>
//       <shaderMaterial
//         vertexShader={vertexShader}
//         fragmentShader={fragmentShader}
//         uniforms={uniforms}
//         side={DoubleSide}
//         transparent={true}
//         lights={true}
//         wireframe={false}
//       />
//     </mesh>
//   );
// };

// export default Heart;