import { series } from "./data.js"; // <-- .js
import { averageSeasons } from "./utils.js"; // <-- .js
const tbody = document.getElementById("series-tbody");
const avgSpan = document.getElementById("avg-value");
function render() {
    tbody.innerHTML = "";
    console.log("app.ts cargado");
    for (const s of series) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <th scope="row">${s.id}</th>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
        tbody.appendChild(tr);
    }
    avgSpan.textContent = averageSeasons(series).toFixed(2);
}
render();
