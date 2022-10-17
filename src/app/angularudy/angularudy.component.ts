import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularudy',
  templateUrl: './angularudy.component.html',
  styleUrls: ['./angularudy.component.css']
})
export class AngularudyComponent implements OnInit {

  public text = "";

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.text += "Yeah Mich!";
  }

}
