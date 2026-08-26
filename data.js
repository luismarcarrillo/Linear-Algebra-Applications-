/* =========================================================
   DATOS DEL CATÁLOGO
   -----------------------------------------------------------
   Para añadir una nueva aplicación: agrega un objeto al arreglo
   `aplicaciones`, dentro de la categoría correspondiente
   (usa el mismo valor de "categoria" que ya existe, o crea una
   nueva categoría en el arreglo `categorias`).

   Campos de cada aplicación:
     id          -> texto corto único, ej: "AL.05"
     categoria   -> debe coincidir con el "id" de una categoría
     titulo      -> nombre de la aplicación
     descripcion -> 1-2 frases
     etiquetas   -> arreglo de strings cortos
     estado      -> "planeada" | "en-progreso" | "completa"
     enlace      -> URL al notebook/repositorio/documento (o "#")
   ========================================================= */

const categorias = [
  {
    id: "transformaciones",
    prefijo: "AL — 1",
    nombre: "Transformaciones lineales y geometría",
    descripcion: "Rotaciones, proyecciones, cizalladuras y otras transformaciones vistas como mapas entre espacios."
  },
  {
    id: "sistemas",
    prefijo: "AL — 2",
    nombre: "Sistemas de ecuaciones y resolución numérica",
    descripcion: "Eliminación gaussiana, factorizaciones y métodos iterativos aplicados a sistemas concretos."
  },
  {
    id: "espacios",
    prefijo: "AL — 3",
    nombre: "Espacios y subespacios vectoriales",
    descripcion: "Bases, independencia lineal, rango y núcleo en contextos aplicados."
  },
  {
    id: "propios",
    prefijo: "AL — 4",
    nombre: "Valores y vectores propios",
    descripcion: "Diagonalización, formas cuadráticas y su interpretación geométrica o dinámica."
  },
  {
    id: "computacional",
    prefijo: "AL — 5",
    nombre: "Álgebra lineal computacional",
    descripcion: "Implementaciones en Python, análisis numérico y conexiones con ciencia de datos."
  }
];

const aplicaciones = [
  {
    id: "AL.01",
    categoria: "transformaciones",
    titulo: "Matrices de rotación en el plano",
    descripcion: "Deducción de la matriz de rotación y verificación de que preserva norma y ángulos.",
    etiquetas: ["geometría", "R²"],
    estado: "planeada",
    enlace: "#"
  },
  {
    id: "AL.02",
    categoria: "sistemas",
    titulo: "Eliminación gaussiana paso a paso",
    descripcion: "Resolución de un sistema 3×3 con seguimiento explícito de cada operación elemental.",
    etiquetas: ["sistemas", "pivoteo"],
    estado: "planeada",
    enlace: "#"
  },
  {
    id: "AL.03",
    categoria: "espacios",
    titulo: "Rango y núcleo de una transformación",
    descripcion: "Ejemplo trabajado que conecta el teorema rango-nulidad con una transformación concreta.",
    etiquetas: ["teoría", "dimensión"],
    estado: "planeada",
    enlace: "#"
  },
  {
    id: "AL.04",
    categoria: "propios",
    titulo: "Diagonalización de una matriz simétrica",
    descripcion: "Cálculo de valores y vectores propios, y su lectura como ejes principales.",
    etiquetas: ["propios", "simetría"],
    estado: "planeada",
    enlace: "#"
  },
  {
    id: "AL.05",
    categoria: "computacional",
    titulo: "Comparación numérica: NumPy vs. cálculo a mano",
    descripcion: "Verificación de resultados manuales de álgebra lineal usando NumPy.",
    etiquetas: ["python", "numpy"],
    estado: "planeada",
    enlace: "#"
  }
];
