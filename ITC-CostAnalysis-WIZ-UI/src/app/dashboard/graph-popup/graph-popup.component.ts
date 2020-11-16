import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

// import {Component, Inject, OnInit} from "@angular/core";

@Component({
  selector: 'app-graph-popup',
  templateUrl: './graph-popup.component.html',
  styleUrls: ['./graph-popup.component.scss']
})
export class GraphPopupComponent implements OnInit {

  displayGraph = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.displayGraph = data;
  }

  ngOnInit() {
  }

}
