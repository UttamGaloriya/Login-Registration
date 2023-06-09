import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthFormRoutingModule } from './health-form-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { MatmodualsModule } from '../matmoduals/matmoduals.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAllComponent } from './select-all/select-all.component';
import { NgChartsModule } from 'ng2-charts';
import { TableFormComponent } from './table-form/table-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MathsSymbolPipe } from './maths-symbol.pipe';
import { ChartDailogComponent } from './chart-dailog/chart-dailog.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    AddFormComponent,
    SelectAllComponent,
    TableFormComponent,
    ViewFormComponent,
    NavbarComponent,
    MathsSymbolPipe,
    ChartDailogComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    HealthFormRoutingModule,
    MatmodualsModule,
    ReactiveFormsModule,
    NgChartsModule,

  ]
})
export class HealthFormModule { }
