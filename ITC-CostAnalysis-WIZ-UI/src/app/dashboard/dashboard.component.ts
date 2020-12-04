import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GraphPopupComponent} from "./graph-popup/graph-popup.component";
import {FilterService} from "../header-compressed/filters/filter.service";
import {Filters} from "../header-compressed/filters/filters";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  fullScreenEnabledGraph = "";

  viewFullScreen(graphType){
    this.fullScreenEnabledGraph = graphType;
    this.openDialog(graphType);
  }

  removeFullScreenView(){
    this.fullScreenEnabledGraph = "";
  }

  constructor(public dialog: MatDialog) {}

  openDialog(graphType) {
    const dialogRef = this.dialog.open(GraphPopupComponent,{
     data:graphType
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
