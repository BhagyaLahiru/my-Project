import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly apiUrl = 'http://localhost:49789/api/User/Select/';
  constructor(private http: HttpClient) { }
  
  getDataUser(id:number) {
    return this.http.get(this.apiUrl+id);
  }
}
