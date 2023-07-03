import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthFormRoutingModule } from './health-form-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { MatmodualsModule } from '../matmoduals/matmoduals.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAllComponent } from './select-all/select-all.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AddFormComponent,
    SelectAllComponent
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
