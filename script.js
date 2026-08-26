// Renderiza el catálogo de aplicaciones en index.html a partir de data.js

function contarPorCategoria(catId){
  return aplicaciones.filter(a => a.categoria === catId).length;
}

function renderResumenMatriz(){
  const cont = document.getElementById("matriz-resumen-grid");
  if(!cont) return;
  cont.innerHTML = categorias.map(c => `
    <div class="matriz-celda">
      <span class="n">${contarPorCategoria(c.id)}</span>
      <span class="etiqueta">${c.nombre}</span>
    </div>
  `).join("");
}

function tarjetaHTML(app){
  const etiquetas = app.etiquetas.map(e => `<span class="etiqueta-pill">${e}</span>`).join("");
  const estadoTexto = {
    "planeada": "Planeada",
    "en-progreso": "En progreso",
    "completa": "Completa"
  }[app.estado] || app.estado;

  return `
    <a class="tarjeta" href="${app.enlace}">
      <div class="tarjeta-cabeza">
        <h3>${app.titulo}</h3>
        <span class="tarjeta-num">${app.id}</span>
      </div>
      <p>${app.descripcion}</p>
      <div class="etiquetas">${etiquetas}</div>
      <div class="estado" data-estado="${app.estado}">${estadoTexto}</div>
    </a>
  `;
}

function renderCategorias(){
  const cont = document.getElementById("categorias-cont");
  if(!cont) return;

  cont.innerHTML = categorias.map(cat => {
    const apps = aplicaciones.filter(a => a.categoria === cat.id);
    const tarjetas = apps.length
      ? apps.map(tarjetaHTML).join("")
      : `<p class="vacio">Aún no hay aplicaciones registradas en esta categoría.</p>`;

    return `
      <section class="categoria" id="${cat.id}">
        <div class="categoria-titulo">
          <span class="corchete">[</span>
          <h2>${cat.nombre}</h2>
          <span class="corchete">]</span>
          <span class="categoria-prefijo">${cat.prefijo}</span>
        </div>
        <p class="categoria-desc">${cat.descripcion}</p>
        <div class="rejilla-tarjetas">${tarjetas}</div>
      </section>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderResumenMatriz();
  renderCategorias();
});
