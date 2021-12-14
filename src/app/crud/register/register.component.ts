import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validForm!: FormGroup;
  employee: Employee = new Employee();
  isActive = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.validForm = this.fb.group({
      name: new FormControl(this.employee.name, [
        Validators.required,
      ]),
      email: new FormControl(this.employee.email, [
        Validators.email,
      ]),
      phone: new FormControl(this.employee.phone, [
        Validators.pattern("(09|03|01|05|08)+([0-9]{7,10})\\b"),
      ]),
      password: new FormControl(this.employee.password, [
        Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$")
      ]),
    })
  }

  onSubmit(value: any) {
    this.employee.name = value.name;
    this.employee.email = value.email;
    this.employee.phone = value.phone;
    this.employee.password = value.password;

    this.employeeService.createEmployee(this.employee).subscribe(res => {
      this.isActive = true;
      this.router.navigate(['./login']);
    })
  }

  get email() {
    return this.validForm.get('email');
  }

  get phone() {
    return this.validForm.get('phone');
  }

  get password() {
    return this.validForm.get('password');
  }

}
