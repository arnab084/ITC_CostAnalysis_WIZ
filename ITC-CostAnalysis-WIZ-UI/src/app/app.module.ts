import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensePerEmployeeComponent } from './dashboard/expense-per-employee/expense-per-employee.component';

import { ApiModule } from '../../typescript-angular-client/';
import { HttpClientModule } from '@angular/common/http';

import { HighchartsChartModule } from 'highcharts-angular';
import { ExpenseByBranchComponent } from './dashboard/expense-by-branch/expense-by-branch.component';
import { ExpenseByCostCenterComponent } from './dashboard/expense-by-cost-center/expense-by-cost-center.component';
import { ExpenseByDesignationComponent } from './dashboard/expense-by-designation/expense-by-designation.component';
import { ExpenseByEmployeeGradeComponent } from './dashboard/expense-by-employee-grade/expense-by-employee-grade.component';
import { ExpenseByBusinessAreaComponent } from './dashboard/expense-by-business-area/expense-by-business-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ExpensePerEmployeeComponent,
    ExpenseByBranchComponent,
    ExpenseByCostCenterComponent,
    ExpenseByDesignationComponent,
    ExpenseByEmployeeGradeComponent,
    ExpenseByBusinessAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
