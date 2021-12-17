import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe((res:any ) => {
      console.log(res.response);
      this.employees = res.response;
    } );
  }
  onDelete(data:any) {
    console.log(data);
    
    this.employeeService.deleteEmployee(data._id).subscribe(() => 
      this.employees = this.employees.filter(x => x._id !== data._id));
  }
  
}
