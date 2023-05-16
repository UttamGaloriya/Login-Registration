import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'table', component: TableComponent },
      { path: 'edit/:id', component: EditComponent }
    ]


  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
