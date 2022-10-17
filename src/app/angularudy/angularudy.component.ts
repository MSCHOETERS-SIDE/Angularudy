import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularudy',
  templateUrl: './angularudy.component.html',
  styleUrls: ['./angularudy.component.css']
})
export class AngularudyComponent implements OnInit {

  private numb = 0;
  public text = "";

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.numb++;
    this.text += "Yeah Mich!";

    if(this.numb === 5)
    {this.text = "Rudy win the game !"
  this.numb = 0;}
  }

}
