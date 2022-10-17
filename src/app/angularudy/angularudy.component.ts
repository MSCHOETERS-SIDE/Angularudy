import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-angularudy',
  templateUrl: './angularudy.component.html',
  styleUrls: ['./angularudy.component.css']
})
export class AngularudyComponent implements OnInit {

  public rudyisWinning = false;
  private numb = 0;
  public text = "";
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  click(){
    this.numb++;
    this.text += " Yeah Mich! ";

    if(this.numb === 5){
      this.text = "";
      this.numb = 0;
      this.rudyisWinning = !this.rudyisWinning;
    }

    if(this.rudyisWinning)  this.text = " Rudy win the game ! (" + this.numb + "/5)" 
  }

}
