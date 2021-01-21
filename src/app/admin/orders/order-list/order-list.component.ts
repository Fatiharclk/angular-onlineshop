import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private orderRepository: OrderRepository) { }

  ngOnInit(): void {
  }
  
  getOrders():Order[] {
    return this.orderRepository.getOrders();
 }

}
