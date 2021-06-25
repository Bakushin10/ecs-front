import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // private baseURL: string = '/proxy';

  response: any;
  fnolDataSub = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: null,
  };

  postFnolData(fnolData: any) {
    return this.http
      //.post('http://localhost:8084/api/v1/fnol', fnolData, this.httpOptions)
      .post('/api/v1/fnol', fnolData, this.httpOptions)
      .subscribe({
        next: (res) => {
          this.response = res;
          console.log(this.response);
          this.fnolDataSub.next(this.response.data);
        },
        error: (error) => {
          console.log('ERROR: ' + error.message);
        },
      });
  }
}
