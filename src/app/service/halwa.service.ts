import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class HalwaService {

  constructor(private http: HttpClient){}

    getHalwa(): Observable<any>{
      return this.http.get('http://127.0.0.1:8081/api/gateaux/')
    }
  
}
