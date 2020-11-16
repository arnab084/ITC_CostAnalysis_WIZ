import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GraphPopupComponent} from "./graph-popup/graph-popup.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
  }

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



  getDisplayType(type){
    if(this.fullScreenEnabledGraph === ""){
      return "displaySmall";
    } else if(this.fullScreenEnabledGraph === type){
      return "displayFull";
    } else {
      return "displayNone";
    }
  }

}
