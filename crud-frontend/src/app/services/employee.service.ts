import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get<Employee[]>(this.url);
  }
  saveEmployee(emp: Employee) {
    return this.http.post(this.url, emp);
  }
  updateEmployee(emp: Employee) {
    return this.http.put(`${this.url}/${emp._id}`, emp);
  }
  deleteEmployee(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
