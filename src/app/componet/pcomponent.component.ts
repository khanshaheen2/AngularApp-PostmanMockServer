import { Component, OnInit } from '@angular/core';
import { PService } from '../services/p.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'post',
  templateUrl: './pcomponent.component.html',
  styles: [
  ]
})
export class PcomponentComponent {
  public result: any;
  public msg: JSON;
  constructor(public service: PService) { }
  public clickMe(data) {
    this.service.postrequestEX(data).subscribe((posRes) => {
      this.result = posRes;
    }, (e: HttpErrorResponse) => {
      console.log(e);
    });

  }

}
