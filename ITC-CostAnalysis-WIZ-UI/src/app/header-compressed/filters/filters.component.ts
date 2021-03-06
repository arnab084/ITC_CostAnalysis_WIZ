import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from "./filter.service";
import {Filters} from "./filters";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent  {

  constructor(private filterService: FilterService) { }

  filter:Filters = new Filters("","","");
  onDataChange(){
    this.filterService.updatedDataSelection(this.filter);
  }

  isMonthVisible(monthCount){
    return this.filter.quarter.indexOf(monthCount)!=-1 || this.filter.quarter=="";
  }


  onQuarterChange(){
    this.filter.month = "";
    this.onDataChange();
  }
}
