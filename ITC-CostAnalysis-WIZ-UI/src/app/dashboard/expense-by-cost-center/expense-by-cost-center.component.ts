import { Component, OnInit } from '@angular/core';
import {TravelControllerService} from "../../../../typescript-angular-client";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-expense-by-cost-center',
  templateUrl: './expense-by-cost-center.component.html',
  styleUrls: ['./expense-by-cost-center.component.scss']
})
export class ExpenseByCostCenterComponent implements OnInit {

  costCenterExpenseData;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;


  constructor(private travelCtrlService: TravelControllerService) { }

  ngOnInit() {
    this.travelCtrlService.getExpenseByCostCenterUsingGET().subscribe(obj => {
      this.costCenterExpenseData = [{data: []}];
      obj.forEach(item => {
        this.costCenterExpenseData[0].data.push([item.key.length>10?item.key.substring(0, 10):item.key, item.value]);
      });
      this.processChart();
    });
  }


  processChart(){
    let chartOptionsContent:Highcharts.Options = {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Cost per Cost Center'
      },

      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '10px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        tickAmount:5,
        title: {
          text: 'Total Cost',
        },

      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Total cost for travel: <b>{point.y:.0f}</b>'
      },
      credits: {
        enabled: false
      },
      series: this.costCenterExpenseData
    };
    this.chartOptions = chartOptionsContent;

  }
}
