import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  
  public isActive = [true,false];
  constructor() { }

  ngOnInit() {
  }
  public changeClass(i){
    this.isActive = [false,false];
    this.isActive[i] = true;
  }

}
