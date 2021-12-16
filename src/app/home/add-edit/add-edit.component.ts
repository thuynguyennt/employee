import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  addForm!: FormGroup;
  employee: Employee = new Employee();
  submitted = false;
  isActive = false;
  id!: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.addForm = this.fb.group({
      name: new FormControl(this.employee.name, [
        Validators.required,
      ]),
      designation: new FormControl(this.employee.designation , [
        Validators.required,
      ]),
      email: new FormControl(this.employee.email, [
        Validators.email,
      ]),
      phone: new FormControl(this.employee.phone, [
        Validators.pattern("(09|03|01|05|08)+([0-9]{7,10})\\b"),
      ]),
      age: new FormControl(this.employee.age, [
        Validators.required,
      ]),
    })
  }

  onSubmit(value: any) {
    this.employee.name = value.name;
    this.employee.designation = value.designation;
    this.employee.email = value.email;
    this.employee.phone = value.phone;
    this.employee.age = value.age;
    this.submitted = true;

    // this.employeeService.storeEmployee(this.employee).subscribe(res => {
    //   console.log(res);
    //   this.router.navigate(['/employees'])
    // })

    if (this.isActive) {
      this.createUser();
    } else {
      this.editUser();
    }
  }


  private createUser() {
    this.employeeService.storeEmployee(this.addForm.value).subscribe(res => {
      console.log(res);
      // this.router.navigate(['/employees']);
    })
  }

  private editUser() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(res => {
      console.log(res);
      this.router.navigate(['/employees']);
    })
  }

  get f() { return this.addForm.controls; }

  get email() {
    return this.addForm.get('email');
  }
  get designation() {
    return this.addForm.get('designation');
  }

  get phone() {
    return this.addForm.get('phone');
  }

  get age() {
    return this.addForm.get('age');
  }


}
