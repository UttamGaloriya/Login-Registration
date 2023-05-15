import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableComponent } from './table/table.component';
import { MatmodualsModule } from '../matmoduals/matmoduals.module';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCustomPipe } from '../my-custom-pipe';



@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    EditComponent,
    MyCustomPipe,


  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatmodualsModule,
    ReactiveFormsModule,


  ]
})
export class HomeModule { }
