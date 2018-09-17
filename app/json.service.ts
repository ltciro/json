import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { Observable, pipe } from 'rxjs';

import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'

})
export class JsonService {

  constructor(private http: HttpClient) { }

  //verJson(url: string) {
/*     verJson(url: string) {
    return this.http.get(url).pipe(map((res: Response) => res.json()));
  } */
  verJson(APIUrl) {
   // return this.http.get(APIUrl.baseUrl + '/api/Authors');
    return this.http.get<Array<{}>>(APIUrl).pipe(map(data => data));
  }


}


