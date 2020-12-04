import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TravelControllerService} from "typescript-angular-client";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-expense-by-branch',
  templateUrl: './expense-by-branch.component.html',
  styleUrls: ['./expense-by-branch.component.scss']
})
export class ExpenseByBranchComponent implements OnInit {

  @Input()
  displayClass = "displaySmall";

  @Output()
  viewFullEvent = new EventEmitter<string>();

  viewFullScreen(){
    this.viewFullEvent.emit("branch")
  }

  branchExpenseData;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;


  constructor(private travelCtrlService: TravelControllerService) { }

  ngOnInit() {
    this.travelCtrlService.getExpenseByBranchUsingGET().subscribe(obj => {
      this.branchExpenseData = [{
        name: 'Cost',
        colorByPoint: true,
        data: []
      }];
      obj.forEach(item => {
        this.branchExpenseData[0].data.push([item.key, item.value]);
      });
      this.processChart();
    });
  }


  processChart(){
    let chartOptionsContent:Highcharts.Options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Expense by Branch'
      },
      tooltip: {
        pointFormat: 'Cost: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: this.branchExpenseData,
      credits: {
        enabled: false
      },
    };
    this.chartOptions = chartOptionsContent;

  }

}
