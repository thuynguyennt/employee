import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
// import { ChartsModule } from 'ng2-charts';


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
    ReactiveFormsModule,
    NgChartsModule
    // ChartsModule
  ]
})
export class HomeModule { }
