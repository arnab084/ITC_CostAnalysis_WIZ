import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Filters} from "./filters";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private dataSource = new BehaviorSubject<Filters>(new Filters("","",""));
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(data:any){
    this.dataSource.next(data);
  }

  getEndDate(filter: Filters){
    let year="2020", month="12", day=31;
    if(filter.year!=""){
      year = filter.year;
    }
    if(filter.quarter != ""){
      let quarters = filter.quarter.split(",");
      month = quarters[2];
    }
    if(filter.month != ""){
      month = filter.month;
    }

    day = this.getNumberOfDays(month,year);

    return year+"-"+month+"-"+day;
  }

  getNumberOfDays(month,year){
    let count = 31;
    if(month%2 == Math.floor(month/8)){
      count = 30;
    }
    if(month == 2){
      count = 28;
      if(year%4==0){
        count++;
      }
    }

    return count;
  }


  getStartDate(filter: Filters){
    let year="2016", month="01", day="01";
    if(filter.year!=""){
      year = filter.year;
    }
    if(filter.quarter != ""){
      let quarters = filter.quarter.split(",");
      month = quarters[0];
    }
    if(filter.month != ""){
      month = filter.month;
    }

    return year+"-"+month+"-"+day;

  }


}
