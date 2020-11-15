import { Component, OnInit } from '@angular/core';
import {TravelControllerService} from "typescript-angular-client";

@Component({
  selector: 'app-expense-per-employee',
  templateUrl: './expense-per-employee.component.html',
  styleUrls: ['./expense-per-employee.component.scss']
})
export class ExpensePerEmployeeComponent implements OnInit {

  employeeExpenseData;

  constructor(private travelCtrlService: TravelControllerService) { }

  ngOnInit() {
    this.travelCtrlService.getExpensePerEmployeeUsingGET().subscribe(obj => {
      this.employeeExpenseData = obj;
    });
  }

}
