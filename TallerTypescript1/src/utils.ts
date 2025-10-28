import { CatalogItem, Category } from "./models.js";


export const byCategory = (cat: Category) => (x: CatalogItem) => x.category === cat;
export const byNameIncludes = (q: string) => (x: CatalogItem) => x.name.toLowerCase().includes(q.toLowerCase());


export function sum(a: number, b: number): number { return a + b; }
export const avg = (xs: number[]): number => xs.length ? xs.reduce(sum) / xs.length : 0;


export function formatCurrency(value: number, locale = "es-CO", currency = "COP"): string {
return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
}


export function groupBy<T, K extends string | number | symbol>(xs: T[], keyFn: (x: T) => K): Record<K, T[]> {
return xs.reduce((acc, x) => {
const k = keyFn(x);
(acc[k] ||= []).push(x);
return acc;
}, {} as Record<K, T[]>);
}