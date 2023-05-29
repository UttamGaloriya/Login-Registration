import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayersComponent } from './layers/layers.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTableComponent } from './product-table/product-table.component';

const routes: Routes = [
  {
    path: '', component: LayersComponent,
    children: [
      { path: 'add', component: ProductAddComponent },
      { path: 'view', component: ProductViewComponent },
      { path: 'edit', component: ProductEditComponent },
      { path: 'table', component: ProductTableComponent },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
