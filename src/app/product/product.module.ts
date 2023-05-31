import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { LayersComponent } from './layers/layers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { MatmodualsModule } from '../matmoduals/matmoduals.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MutltiProductComponent } from './mutlti-product/mutlti-product.component';
import { ArraytableComponent } from './arraytable/arraytable.component';
import { ArrayEditComponent } from './array-edit/array-edit.component';
import { ProductNamePipe } from '../product-name-pipe';


@NgModule({
  declarations: [
    LayersComponent,
    NavbarComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductTableComponent,
    ProductViewComponent,
    MutltiProductComponent,
    ArraytableComponent,
    ArrayEditComponent,
    ProductNamePipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatmodualsModule,
    ReactiveFormsModule,

  ]
})
export class ProductModule { }
