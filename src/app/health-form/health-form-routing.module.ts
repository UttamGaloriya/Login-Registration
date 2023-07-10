import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from '../home/table/table.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { TableFormComponent } from './table-form/table-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent
    , children: [
      { path: 'add', component: AddFormComponent },
      { path: 'table', component: TableFormComponent },
      { path: 'view/:id', component: ViewFormComponent },
      { path: 'edit', component: EditFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthFormRoutingModule { }
