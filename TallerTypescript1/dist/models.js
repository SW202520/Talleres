export class CatalogItem {
    constructor(id, name, category, price, discount = 0) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
    }
    finalPrice() {
        return Math.round(this.price * (1 - this.discount));
    }
}
