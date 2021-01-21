import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent,canActivate:[AuthGuard],
    children:[
      {path:"products/:mode/:id",component:ProductFormComponent},
      {path:"products/:mode",component:ProductFormComponent},
      {path:"products",component:ProductListComponent},
      {path:"categories/:mode/:id",component:CategoryFormComponent},
      {path:"categories/:mode",component:CategoryFormComponent},
      {path:"categories",component:CategoryListComponent},
      {path:"orders/:mode/:id",component:OrderFormComponent},  
      {path:"orders",component:OrderListComponent}, 
   
    ]
},
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
