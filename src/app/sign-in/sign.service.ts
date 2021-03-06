import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignService {

  public _userIsAuthenticated = true;
  private _userId = 'abc';
  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  constructor(private http: HttpClient) { }
  get userId() {
    return this._userId;
  }

  async login(body) {
    console.log(body);
    const successes = await this.http.request('POST', 'http://localhost:49789/api/User/login', {body: body, headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}).toPromise();
    return successes;
  }

  logout() {
    this._userIsAuthenticated = false;
  }

  async singup(body) {
    console.log(body);
    const successes = await this.http.request('POST',  'http://localhost:49789/api/User/insert', {body: body, headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })}).toPromise();
    return successes;
  }
}
