import { series } from "./data.js";
import { averageSeasons } from "./utils.js";
function start() {
    const tbody = document.getElementById("series-tbody");
    const avgSpan = document.getElementById("avg-value");
    const detail = document.getElementById("series-detail");
    if (!tbody || !avgSpan || !detail) {
        console.error("Faltan elementos del DOM (#series-tbody, #avg-value o #series-detail)");
        return;
    }
    //listado
    tbody.innerHTML = "";
    for (const s of series) {
        const tr = document.createElement("tr");
        tr.dataset.id = String(s.id); //click
        tr.style.cursor = "pointer";
        tr.innerHTML = `
      <th scope="row">${s.id}</th>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
        tbody.appendChild(tr);
    }
    // Promedio
    avgSpan.textContent = averageSeasons(series).toFixed(2);
    tbody.addEventListener("click", (ev) => {
        const tr = ev.target.closest("tr");
        if (!tr)
            return;
        const id = Number(tr.dataset.id);
        const sel = series.find(s => s.id === id);
        if (sel)
            renderDetail(sel, detail);
    });
    if (series.length)
        renderDetail(series[0], detail);
}
function renderDetail(s, container) {
    const img = s.poster ? `<img src="${s.poster}" class="card-img-top" alt="${s.name} poster">` : "";
    const desc = s.description ?? "Sin descripción.";
    const link = s.webpage ? `<a href="${s.webpage}" target="_blank" rel="noopener" class="card-link">Sitio oficial</a>` : "";
    container.innerHTML = `
    <div class="card shadow-sm">
      ${img}
      <div class="card-body">
        <h5 class="card-title">${s.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${s.channel} • ${s.seasons} seasons</h6>
        <p class="card-text">${desc}</p>
        ${link}
      </div>
    </div>
  `;
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
}
else {
    start();
}
