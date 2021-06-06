import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GemProcService {

  readonly baseUI = 'http://localhost:49789/api/Meet/Select/';
  getData(id: number) {
    return this.http.get(this.baseUI+id);
  }


  readonly apiUrl = 'http://localhost:49789/api/Gem/Select/';
  constructor(private http: HttpClient) { }
  
  getDatagem(id:number) {
    return this.http.get(this.apiUrl+id);
  }
}
