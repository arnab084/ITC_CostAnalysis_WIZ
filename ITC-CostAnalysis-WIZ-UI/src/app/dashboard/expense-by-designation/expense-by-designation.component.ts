import { Component, OnInit } from '@angular/core';
import {TravelControllerService} from "../../../../typescript-angular-client";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-expense-by-designation',
  templateUrl: './expense-by-designation.component.html',
  styleUrls: ['./expense-by-designation.component.scss']
})
export class ExpenseByDesignationComponent implements OnInit {

  designationWiseExpenseData;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;


  constructor(private travelCtrlService: TravelControllerService) { }

  ngOnInit() {
    this.travelCtrlService.getExpenseByDesignationUsingGET().subscribe(obj => {
      this.designationWiseExpenseData = [];
      obj.forEach(item => {
        this.designationWiseExpenseData.push([item.key.length>25?item.key.substring(0, 25):item.key, item.value]);
      });
      this.processChart();
    });
  }


  processChart(){
    let chartOptionsContent:Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Designation wise Expense'
      },

      xAxis: {
        type: 'category',
        visible:false,
      },
      yAxis: {
        min: 0,

        title: {
          text: 'Total Cost',
        },

      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Total cost for travel: <b>{point.y:.1f}</b>'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          data: this.designationWiseExpenseData,
          type: 'line',
          dataLabels: {
            enabled: true,
            align: 'center',
            format: '{point.name}<br>{point.y:.0f}', // one decimal
            y: 0, // 10 pixels down from the top
            style: {
              fontSize: '9px',
              fontFamily: 'Verdana'
            }
          }
        }]
    };
    this.chartOptions = chartOptionsContent;

  }

}
