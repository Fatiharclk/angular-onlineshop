import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';

@NgModule({
  declarations: [AdminComponent,AuthComponent, ProductListComponent, ProductFormComponent, CategoryListComponent, CategoryFormComponent,OrderListComponent, OrderFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  providers:[AuthGuard]
})
export class AdminModule { }
