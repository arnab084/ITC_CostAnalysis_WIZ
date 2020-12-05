import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GraphPopupComponent} from "../dashboard/graph-popup/graph-popup.component";

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.scss']
})
export class DashboardNewComponent {


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
