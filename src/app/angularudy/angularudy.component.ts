import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-angularudy',
  templateUrl: './angularudy.component.html',
  styleUrls: ['./angularudy.component.css']
})
export class AngularudyComponent implements OnInit {

  private numb = 0;
  public text = "";
  public text2 = "";
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  click(){
    this.numb++;
    this.text += "Yeah Mich!";

    if(this.numb === 5)
    {this.text = "Rudy win the game !"
  this.numb = 0;}
  }

  click2() {
this.text2 += "nonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn "
  }



}
