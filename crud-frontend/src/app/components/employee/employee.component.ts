import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';
declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: Employee = new Employee();
  employeesList: Employee[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.resetForm();
    this.allEmployees();
  }
  onSubmit(form: NgForm) {
    if (this.selectedEmployee._id != '') {
      this.empService.updateEmployee(this.selectedEmployee).subscribe((res) => {
        this.allEmployees();
        this.resetForm(form);
        M.toast({
          html: 'Updated Successfully',
          displayLength: 30000,
          classes: 'rounded',
        });
      });
    } else {
      this.empService.saveEmployee(this.selectedEmployee).subscribe((res) => {
        this.allEmployees();
        this.resetForm(form);
        M.toast({
          html: 'Added Successfully',
          displayLength: 3000,
          classes: 'rounded',
        });
      });
    }
  }
  deleteEmployee(id) {
    this.empService.deleteEmployee(id).subscribe((res) => {
      this.allEmployees();
      M.toast({
        html: 'Deleted Successfully',
        displayLength: 3000,
        classes: 'rounded',
      });
    });
  }
  allEmployees() {
    this.empService.getAllEmployees().subscribe((res) => {
      this.employeesList = res;
    });
  }
  editEmployee(emp: Employee) {
    this.selectedEmployee = {
      _id: emp._id,
      name: emp.name,
      salary: emp.salary,
      position: emp.position,
      office: emp.office,
    };
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.selectedEmployee = {
      _id: '',
      name: '',
      office: '',
      position: '',
      salary: null,
    };
  }
}
