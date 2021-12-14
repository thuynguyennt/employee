import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CrudRoutingModule } from './crud-routing.module';



@NgModule({
  declarations: [
   RegisterComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
