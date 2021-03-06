import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-compressed',
  templateUrl: './header-compressed.component.html',
  styleUrls: ['./header-compressed.component.scss']
})
export class HeaderCompressedComponent implements OnInit {

  @Input()
  filterDisplay = true;

  filterEnabled = "blueDisplay";
  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(){
    this.filterEnabled = this.filterEnabled == "blackDisplay" ? "blueDisplay": "blackDisplay";
  }

}
