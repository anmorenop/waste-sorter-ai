// liquidShader.js
export const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  // Efecto de onda animado
  float wave = sin(vPosition.x * 5.0 + uTime * 2.0) * 0.5 + 0.5;
  
  // Mezcla de colores
  vec3 color = mix(uColor1, uColor2, wave);
  
  // Efecto de brillo
  float glow = sin(uTime * 3.0 + vPosition.y * 5.0) * 0.5 + 0.5;
  
  gl_FragColor = vec4(color * glow, 1.0);
}
`;