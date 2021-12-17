import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '', redirectTo: 'infomation', pathMatch: 'full'},
  {path: 'infomation', component: InfoComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-edit', component: AddEditComponent },
  {path: 'add-edit/:_id', component: AddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
