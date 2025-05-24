# 🧪 Taller - Gestos con Cámara Web: Control Visual con MediaPipe

## 🎯 Objetivo

Explorar cómo controlar visualmente la pantalla usando gestos con las manos, detectados en tiempo real mediante la cámara web y la biblioteca MediaPipe. El enfoque es permitir interacciones naturales sin necesidad de hardware adicional.

## 🧰 Herramientas

- Python (Colab con acceso a cámara o ejecución local)
- Librerías: `mediapipe`, `opencv-python`, `numpy`, `math`

## 🤖 Funcionamiento

Se activa la cámara y se detectan manos en tiempo real. Basado en la cantidad de dedos extendidos o la distancia entre el pulgar e índice, se ejecutan acciones visuales como cambiar el fondo o mover un objeto.

### Gestos implementados:

- ✋ Palma abierta (5 dedos): Cambia fondo a celeste.
- ✊ Puño cerrado (0 dedos): Restaura fondo a negro.
- 👉 Un dedo: Mueve el círculo a la izquierda.
- ✌️ Dos dedos con pinza (índice y pulgar juntos): Mueve el círculo a la derecha.

## 🎮 Comportamiento visual

- El fondo se adapta a gestos.
- Un círculo blanco se mueve en pantalla con gestos.
- La interacción es inmediata y fluida, sin necesidad de clics o botones.

## 🖼️ Evidencias visuales

Se recomienda incluir GIFs o capturas mostrando:

- La palma abierta y el cambio de color.
- El movimiento del círculo con los gestos definidos.
- La interacción en tiempo real.


