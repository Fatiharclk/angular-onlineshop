import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
import { EnumOrderState } from "./enumorder.model";

@Injectable()
export class Order{
    public id:number;
    public name:string;
    public address:string;
    public city:string;
    public phone: string;
    public email:string;
    public orderstate: EnumOrderState=EnumOrderState.waiting;
    public isSent:boolean=false;
    public carts:Cart;

   

    constructor(public cart:Cart)
    {
        this.carts=cart;
    }



    clearOrder(){
        this.id=null;
        this.address=null;
        this.name=null;
        this.city=null;
        this.phone=null;
        this.email=null;
        this.isSent=false;
        this.cart.clear();
        this.carts.clear();
        this.orderstate=EnumOrderState.waiting;
    }

}

