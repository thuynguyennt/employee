import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    DashboardComponent,
    InfoComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }