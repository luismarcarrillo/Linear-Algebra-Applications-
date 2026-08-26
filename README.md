# Catálogo de Álgebra Lineal

Sitio estático con dos páginas:

- `index.html` — catálogo de aplicaciones de álgebra lineal, organizado por categoría.
- `notas.html` — notas de clase y recursos, organizado por curso del semestre.

No requiere build ni dependencias: es HTML + CSS + JS plano.

## Cómo añadir una aplicación nueva

Edita únicamente **`data.js`**. Copia un objeto del arreglo `aplicaciones` y cambia sus campos:

```js
{
  id: "AL.06",
  categoria: "propios",       // debe coincidir con el "id" de una categoría existente
  titulo: "Nombre de la aplicación",
  descripcion: "Una o dos frases.",
  etiquetas: ["palabra1", "palabra2"],
  estado: "en-progreso",       // "planeada" | "en-progreso" | "completa"
  enlace: "https://..."        // link al notebook, repo o documento
}
```

Para crear una categoría nueva, agrega un objeto al arreglo `categorias` con un `id` propio y usa ese mismo `id` en tus aplicaciones.

## Cómo añadir notas o recursos de un curso

Edita `notas.html` directamente: cada curso tiene una lista `<ul class="lista-notas">` y otra `<ul class="lista-recursos">`. Agrega un `<li>` nuevo (y borra el de "Aún sin enlaces" cuando ya tengas el primero).

## Montarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `algebra-lineal`).
2. Sube estos archivos a la raíz del repositorio:
   - En GitHub web: botón **Add file → Upload files**, arrastra todo el contenido de esta carpeta, y confirma el commit.
   - O por línea de comandos, desde esta carpeta:
     ```bash
     git init
     git add .
     git commit -m "Sitio inicial del catálogo"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/algebra-lineal.git
     git push -u origin main
     ```
3. En el repositorio, ve a **Settings → Pages**.
4. En "Build and deployment", selecciona **Source: Deploy from a branch**.
5. Selecciona la rama **main** y la carpeta **/(root)**, luego **Save**.
6. Espera uno o dos minutos; GitHub mostrará la URL publicada, con este formato:
   `https://TU-USUARIO.github.io/algebra-lineal/`

Cada vez que hagas `git push` con cambios (por ejemplo, después de editar `data.js`), el sitio se actualiza solo en unos minutos.

## Notas de diseño

- Tipografías: Source Serif 4 (títulos), IBM Plex Sans (texto), IBM Plex Mono (datos, números de acervo, etiquetas). Se cargan desde Google Fonts vía `<link>` en el `<head>`; si prefieres no depender de una CDN externa, puedes descargarlas y servirlas localmente en una carpeta `/fonts`.
- El fondo de cuadrícula tenue y la notación de corchetes `[ ]` son deliberados: evocan un cuaderno o archivo matemático, y los corchetes matriciales se usan como separador estructural en vez de decoración genérica.
- La sección "Formación paralela" en `notas.html` quedó deliberadamente genérica (solo Python, portugués, escritura científica). Si quieres, puedo ampliarla con más detalle sobre tu plan académico — preferí no asumir qué tanto de eso quieres público.
