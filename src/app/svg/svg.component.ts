import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  public name = "";
  public id = "";
  constructor() { }

  ngOnInit() {
  }

  rect(){
    this.name = 'square';
    this.id = '0';

  }

  circle(){
    this.name = 'circle';
    this.id = '1';

  }

  triangle(){
    this.name = 'triangle';
    this.id = '2';

  }

}
