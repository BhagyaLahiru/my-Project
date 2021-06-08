import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  async addBid(body) {
    const successes = await this.http.request('POST', 'http://localhost:49789/api/Bid/insert', 
    {body: body, headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}).toPromise();
    return successes;
  }

  async updateBid(body) {
    const successes = await this.http.request('PUT', 'http://localhost:49789/api/Bid/Update/'+body.gemId+"/"+body.userId, 
    {body: body, headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}).toPromise();
    return successes;
  }

  async fetchBid(body) {
    const successes = await this.http.request('GET', 'http://localhost:49789/api/Bid/Select/'+body.gemId+"/"+body.userId, 
    { headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}).toPromise();
    return successes;
  }
}
