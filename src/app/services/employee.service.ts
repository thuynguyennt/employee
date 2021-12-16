import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from '../models/employee';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

@Injectable()
export class EmployeeService {
    private employeeUrl ='http://localhost:3000/api//register';
    private employeeLogin = 'http://localhost:3000/api/login';
    private employeesListUrl = 'http://localhost:3000/employee';
    private employeesDelete = 'http://localhost:3000/employee/destroy';
    private employeeAdd = 'http://localhost:3000/employee/store';
    private employeeUpdate = 'http://localhost:3000/employee/update';

    private token = "Bearer "+localStorage.getItem("token");

    private httpAuthorization = {
        headers : new HttpHeaders({'Content-Type': 'application/json'}).append("Authorization",this.token)
    };

    constructor( private http: HttpClient ) { }

    createEmployee(employee: Employee): Observable<Object> {
        return this.http.post(`${this.employeeUrl}`, employee);
    }

    loginEmployee(employee: Employee): Observable<Object> {
        return this.http.post(`${this.employeeLogin}`, employee);
    }

    getEmployeesList() {
        return this.http.get(`${this.employeesListUrl}`);
      }

    deleteEmployee(id: string) {
        return this.http.delete(`${this.employeesDelete}?id=${id}`);
    }

    storeEmployee(employee: Employee) {
        return this.http.post(`${this.employeeAdd}`, employee);
    }

    updateEmployee(id:string, employee: Employee) {
        return this.http.put(`${this.employeeUpdate}?id=${id}`,employee)
    }
}