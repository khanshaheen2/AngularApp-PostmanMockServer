import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PService {

  constructor(public http: HttpClient) { }
  public postrequestEX(data): Observable<any> {
    return this.http.post("https://1a8c1b8a-46ae-4c01-9f62-68d020cd3066.mock.pstmn.io/v1/homw", data);
  }
}
