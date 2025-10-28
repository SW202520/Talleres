export type Category = "book" | "course" | "tool";


export interface Pricable {
price: number;
discount?: number; // porcentaje 0..1
}


export class CatalogItem implements Pricable {
constructor(
public id: number,
public name: string,
public category: Category,
public price: number,
public discount: number = 0
) {}


finalPrice(): number {
return Math.round(this.price * (1 - this.discount));
}
}