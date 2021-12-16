import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  employee: Employee = new Employee();
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // 'email' : new FormControl(this.employee.email, [
      //   Validators.required,
      //   Validators.email,
      // ]),
      // 'password' : new FormControl(this.employee.password, [
      //   Validators.minLength(6),
      // ])
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // account() {
  //   this.router.navigate(['/auth/register']);
  // }
  onSubmit(value: any) {
    this.employee.email = value.email;
    this.employee.password = value.password;
    this.submitted = true;

    this.employeeService.loginEmployee(this.employee).subscribe(res => {
      console.log(res)
      if(res){
        this.router.navigate(['home/employees']);
      } else {
        console.log("chưa có dữ liệu")
      }
    })
  }

  get f() { return this.loginForm.controls; }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
