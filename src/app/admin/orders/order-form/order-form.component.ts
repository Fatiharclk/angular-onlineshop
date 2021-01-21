import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumOrderState } from 'src/app/model/enumorder.model';
import {  Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  enumorderstate=EnumOrderState;
  enumKeys=[];

  editing: boolean = false;
  siparis: Order;
  constructor(private activeRoute: ActivatedRoute, private orderRepository:OrderRepository,private router:Router) {
    this.enumKeys=Object.keys(this.enumorderstate).filter(Number)

    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.siparis = orderRepository.getOrder(activeRoute.snapshot.params['id']);
    }
   }

  ngOnInit(): void {

  }
  OrderSave(orderform:NgForm){
    this.orderRepository.OrderConfirm(this.siparis);
    this.router.navigateByUrl('/admin/main/orders');
  }

}
