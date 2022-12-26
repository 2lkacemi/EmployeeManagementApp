import { Component, OnInit } from '@angular/core';
import { Employee } from './employee/employee';
import { EmployeeService } from './employee/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor() {}

}
