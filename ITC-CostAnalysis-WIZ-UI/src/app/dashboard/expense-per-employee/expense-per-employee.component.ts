import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {TravelControllerService} from "typescript-angular-client";
import * as Highcharts from 'highcharts';
import {Filters} from "../../header-compressed/filters/filters";
import {MatDialog} from "@angular/material/dialog";
import {FilterService} from "../../header-compressed/filters/filter.service";


@Component({
  selector: 'app-expense-per-employee',
  templateUrl: './expense-per-employee.component.html',
  styleUrls: ['./expense-per-employee.component.scss']
})
export class ExpensePerEmployeeComponent implements OnInit, OnDestroy {

  @Input()
  displayClass = "displaySmall";

  chartUpdated = true;

  @Output()
  viewFullEvent = new EventEmitter<string>();

  filterSubscriber;
  filter:Filters = new Filters("","","");
  ngOnInit() {
    this.filterSubscriber = this.filterService.data.subscribe(obj => {
      this.filter = obj;
      this.updateContent();
    });
  }
  ngOnDestroy(): void{
    if(this.filterSubscriber){
      this.filterSubscriber.unsubscribe();
    }
  }

  viewFullScreen(){
    this.viewFullEvent.emit("employee");
    this.chartUpdated = true;
  }

  employeeExpenseData;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;

  constructor(private travelCtrlService: TravelControllerService, private filterService: FilterService) { }

  updateContent() {
    let endDate = this.filter.year+"-12-31";
    let startDate = this.filter.year+"-01-01";
    if(this.filter.year == ""){
      startDate = "2017-01-01";
      endDate = "2020-12-31";
    }
    console.log(startDate);
    console.log(endDate);
    this.travelCtrlService.getExpensePerEmployeeByTimeUsingPOST(endDate,startDate).subscribe(obj => {
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
