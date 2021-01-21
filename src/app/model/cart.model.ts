import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public items: CartItem[] = [];
    public itemCount: number = 0;
    public total: number = 0;

    addItem(urun: Product, amount: number = 1) {
        let item = this.items.find(i => i.product.id == urun.id);
        if (item != undefined) {
            item.amount += amount;
        }
        else {
            this.items.push(new CartItem(urun, amount));
        }
        this.calculate();
    }
    calculate() {
        this.itemCount = 0;
        this.total = 0;

        this.items.forEach(item => {
            this.itemCount += item.amount;
            this.total += (item.amount * item.product.price);
        });
    }

    updateAmount(urun: Product, amount: number) {
        let item = this.items.find(i => i.product.id == urun.id);
        if (item != undefined) {
            item.amount = amount;
        }
        this.calculate();
    }

    removeItem(id: number) {
        let index = this.items.findIndex(i => i.product.id == id);
        this.items.splice(index, 1);
        this.calculate();
    }

    clear() {
        this.items = [];
        this.total = 0;
        this.itemCount = 0;
    }
 

}

export class CartItem {
    constructor(public product: Product,
        public amount: number) {

    }
}