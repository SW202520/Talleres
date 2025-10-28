import { items } from "./data.js";
import { byNameIncludes, avg, formatCurrency, groupBy } from "./utils.js";
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
function renderList(list) {
    const container = $("#items");
    container.innerHTML = list.map(renderCard).join("");
}
function renderCard(x) {
    return `
<article class="card">
<h3>${x.name}</h3>
<p><span class="badge">${x.category}</span></p>
<p>Precio: <strong>${formatCurrency(x.price)}</strong></p>
<p>Final: <strong>${formatCurrency(x.finalPrice())}</strong></p>
</article>
`;
}
function renderStats(list) {
    const stats = $("#stats");
    const avgPrice = avg(list.map(x => x.price));
    const avgFinal = avg(list.map(x => x.finalPrice()));
    const groups = groupBy(list, x => x.category);
    const lines = [];
    lines.push(`<div>Promedio precio: <strong>${formatCurrency(avgPrice)}</strong></div>`);
    lines.push(`<div>Promedio final: <strong>${formatCurrency(avgFinal)}</strong></div>`);
    for (const [cat, xs] of Object.entries(groups)) {
        lines.push(`<div>${cat}: ${xs.length} ítem(s)</div>`);
    }
    stats.innerHTML = lines.join("");
}
function sortList(list, mode) {
    const copy = [...list];
    if (mode === "price-asc")
        copy.sort((a, b) => a.price - b.price);
    if (mode === "price-desc")
        copy.sort((a, b) => b.price - a.price);
    return copy;
}
function applySearchAndSort() {
    const q = document.getElementById("q").value.trim();
    const mode = document.getElementById("order").value;
    const filtered = q ? items.filter(byNameIncludes(q)) : items;
    const ordered = sortList(filtered, mode);
    renderList(ordered);
    renderStats(ordered);
}
function main() {
    renderList(items);
    renderStats(items);
    document.getElementById("btnBuscar").addEventListener("click", applySearchAndSort);
    document.getElementById("order").addEventListener("change", applySearchAndSort);
    document.getElementById("q").addEventListener("keydown", (e) => {
        if (e.key === "Enter")
            applySearchAndSort();
    });
}
document.addEventListener("DOMContentLoaded", main);
