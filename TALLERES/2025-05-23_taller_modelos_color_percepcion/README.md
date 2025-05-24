# 🧪 Taller - Explorando el Color: Percepción Humana y Modelos Computacionales

## 🎯 Objetivo

Explorar cómo distintos modelos de color afectan la percepción visual y cómo simular condiciones como daltonismo o baja iluminación. Se utiliza Python para convertir imágenes entre modelos de color (RGB, HSV, CIE Lab), visualizar sus canales y aplicar transformaciones visuales.

## 🧰 Herramientas

- Python (Colab o Jupyter Notebook)
- Librerías: `opencv-python`, `numpy`, `matplotlib`, `skimage`, `PIL`

## 🎨 Modelos de Color

- **RGB**: Representación digital estándar basada en rojo, verde y azul.
- **HSV**: Tonalidad, saturación y brillo, más intuitivo para ajustes de color.
- **CIE Lab**: Espacio uniforme perceptualmente, útil para comparar diferencias de color.

## 🔬 Transformaciones y Simulaciones

- Conversión entre RGB → HSV y RGB → CIE Lab
- Visualización de canales individuales
- Simulación de:
  - Daltonismo (deuteranopía)
  - Baja iluminación (reducción de brillo)
  - Temperatura de color (cálido y frío)
  - Inversión de colores
  - Imagen en escala de grises

### Función dinámica
```python
simulate(img_rgb, mode="deuteranopia")
