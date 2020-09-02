import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinnerService: NgxSpinnerService)
  {
    this.spinner();

  }
  title = 'ng-losNotables';

  ngOnInit() {
    this.spinner();
  }
  spinner(){
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 3000);
  }
}
