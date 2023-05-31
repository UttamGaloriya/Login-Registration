import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayersComponent } from './layers/layers.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { MutltiProductComponent } from './mutlti-product/mutlti-product.component';
import { ArraytableComponent } from './arraytable/arraytable.component';
import { ArrayEditComponent } from './array-edit/array-edit.component';

const routes: Routes = [
  {
    path: '', component: LayersComponent,
    children: [
      { path: 'addx', component: ProductAddComponent },
      { path: 'view', component: ProductViewComponent },
      // { path: 'editx/:id', component: ProductEditComponent },
      { path: 'pro/:id/:objId', component: ProductEditComponent },
      { path: 'tablex', component: ProductTableComponent },
      { path: 'add', component: MutltiProductComponent },
      { path: 'table', component: ArraytableComponent },
      { path: 'edit/:id', component: ArrayEditComponent },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
