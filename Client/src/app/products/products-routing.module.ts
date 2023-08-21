import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'products-list',
    component: ProductsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
