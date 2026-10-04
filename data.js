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
  
];
