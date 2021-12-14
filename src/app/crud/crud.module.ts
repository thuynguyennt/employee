import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { EmployeeService } from '../services/employee.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
//    RegisterComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
  ],
  bootstrap: []
})
export class CrudModule { }
