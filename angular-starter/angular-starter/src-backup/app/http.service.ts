import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://adpgroup-7dad3.firebaseio.com/adp.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://adpgroup-7dad3.firebaseio.com/adp.json')
      .map((response: Response) => response.json());
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
