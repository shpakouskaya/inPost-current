import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(
    private http: HttpClient
  ) { }

  fetchGettingData(code: string): Observable<any>{
    console.log('1')
    return this.http.post('api/collection', code);
  }

  fetchSendingData(code: string): Observable<any>{
    console.log('2')
    return this.http.post('api/return', code);
  }
}
