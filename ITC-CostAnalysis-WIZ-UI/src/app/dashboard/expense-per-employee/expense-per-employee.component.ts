import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TravelControllerService} from "typescript-angular-client";
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-expense-per-employee',
  templateUrl: './expense-per-employee.component.html',
  styleUrls: ['./expense-per-employee.component.scss']
})
export class ExpensePerEmployeeComponent implements OnInit {

  @Input()
  displayClass = "displaySmall";
  chartUpdated = true;

  @Output()
  viewFullEvent = new EventEmitter<string>();

  viewFullScreen(){
    this.viewFullEvent.emit("employee");
    this.chartUpdated = true;
  }

  employeeExpenseData;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;

  constructor(private travelCtrlService: TravelControllerService) { }

  ngOnInit() {
    this.travelCtrlService.getExpensePerEmployeeUsingGET().subscribe(obj => {
      this.employeeExpenseData = [];
        obj.forEach(item => {
        this.employeeExpenseData.push([item.key.length>10?item.key.substring(0, 10):item.key, item.value]);
      });
      this.processChart();
    });
  }


  processChart(){
    let chartOptionsContent:Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Travel Cost Per Employee'
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
        pointFormat: 'Total cost for travel: <b>{point.y:.1f}</b>'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          data: this.employeeExpenseData,
        type: 'column',
        dataLabels: {
          enabled: true,
          rotation: -90,
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
