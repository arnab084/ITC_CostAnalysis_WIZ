import { Component, OnInit } from '@angular/core';
import {TravelControllerService} from "../../../../typescript-angular-client";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-expense-by-business-area',
  templateUrl: './expense-by-business-area.component.html',
  styleUrls: ['./expense-by-business-area.component.scss']
})
export class ExpenseByBusinessAreaComponent implements OnInit {
  businessAreaExpenseData;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;


  constructor(private travelCtrlService: TravelControllerService) { }

  ngOnInit() {
    this.travelCtrlService.getExpenseByBusinessAreaUsingGET().subscribe(obj => {
      this.businessAreaExpenseData = [];
      obj.forEach(item => {
        this.businessAreaExpenseData.push([item.key.length>10?item.key.substring(0, 10):item.key, item.value]);
      });
      this.processChart();
    });
  }


  processChart(){
    let chartOptionsContent:Highcharts.Options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Business Area'
      },

      xAxis: {
        type: 'category',
        labels: {
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
        pointFormat: 'Travel Cost: <b>{point.y:.0f}</b>'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          data: this.businessAreaExpenseData,
          type: 'column',
          dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.0f}', // one decimal
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
