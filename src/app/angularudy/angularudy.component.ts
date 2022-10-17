import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-angularudy',
  templateUrl: './angularudy.component.html',
  styleUrls: ['./angularudy.component.css']
})
export class AngularudyComponent implements OnInit {

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
    this.text += "Yeah Mich!";
  }

  click2() {
this.text2 += "nonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn "
  }



}
