import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { IUser } from '../beans';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(`192.168.1.4:4010/api/users/all`).pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  getUser(email: string, pass: string): Observable<IUser> {
    return this.http.get(`192.168.1.4:4010/api/users/login?email=${email}&contraseña=${pass}`)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  private handleErrorObservable(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      return throwError('Error: ' + error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(error);
      return throwError('Error: ' + error.status + '=' + error.error.message);
    }
  }

  private getHeaders() {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }

  private extractData(res) {
    const body = res;
    return body;
  }
}
