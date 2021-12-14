import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

@Injectable()
export class EmployeeService {
    private employeeUrl ='http://localhost:3000/api/register';
    private employeeLogin = 'http://localhost:3000/api/login';
    private token = "Bearer "+localStorage.getItem("token");

    private httpAuthorization = {
        headers : new HttpHeaders({'Content-Type': 'application/json'}).append("Authorization",this.token)
    };

    constructor( private http: HttpClient ) { }

    createEmployee(employee: Employee): Observable<Object> {
        return this.http.post(`${this.employeeUrl}`, employee, this.httpAuthorization);
    }

}