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
}
