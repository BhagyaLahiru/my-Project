import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, tap, map} from 'rxjs/Operators'

// const httpOption = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiUrl = 'http://localhost:49789/api/Gem/Selet';
  constructor(private http: HttpClient) { }


  getDataGems()
  {
    return this.http.get(this.apiUrl);
  }

  // private handleError(error: HttpErrorResponse){
  //   if(error.error instanceof ErrorEvent){
  //     console.error('An error accurred;', error.error.message);
  //   }else{
  //     console.error(
  //       'Backend returned code ${error.status},' +
  //       'body was: ${error.error}');
  //   }
  //   return throwError('Something bad happened; please try again later.')
  // }

  // private extractData(res: Response){
  // let body =res;
  // return body || {};
  // }
  // getDataUser(): Observable<any>{
  //   return this.http.get(apiUrl, httpOption).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }
}
