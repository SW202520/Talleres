export const byCategory = (cat) => (x) => x.category === cat;
export const byNameIncludes = (q) => (x) => x.name.toLowerCase().includes(q.toLowerCase());
export function sum(a, b) { return a + b; }
export const avg = (xs) => xs.length ? xs.reduce(sum) / xs.length : 0;
export function formatCurrency(value, locale = "es-CO", currency = "COP") {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
}
export function groupBy(xs, keyFn) {
    return xs.reduce((acc, x) => {
        const k = keyFn(x);
        (acc[k] || (acc[k] = [])).push(x);
        return acc;
    }, {});
}
