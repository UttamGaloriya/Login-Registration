import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthFormRoutingModule } from './health-form-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { MatmodualsModule } from '../matmoduals/matmoduals.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddFormComponent
  ],
  imports: [
    CommonModule,
    HealthFormRoutingModule,
    MatmodualsModule,
    ReactiveFormsModule
  ]
})
export class HealthFormModule { }
