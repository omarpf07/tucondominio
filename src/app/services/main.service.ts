import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { IUser, IMovements, IFee, Contract } from '../beans';
import { map, catchError } from 'rxjs/operators';
import { ICondominium } from '../beans/interfaces/condominium';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(`${environment.apiUrl}/api/users/all`).pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  logIn(email: string, pass: string): Observable<IUser> {
    return this.http.get(`${environment.apiUrl}/api/users/login?email=${email}&contraseña=${pass}`)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  getCondo(): Observable<ICondominium> {
    return this.http.get(`${environment.apiUrl}/api/condominio/all`)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  updateCondo(condo: ICondominium): Observable<ICondominium> {
    return this.http.put(`${environment.apiUrl}/api/condominio/update`, condo)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  createUser(user: IUser) {
    return this.http.post(`${environment.apiUrl}/api/users/add`, user)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  getMorosos(): Observable<IUser[]> {
    return this.http.get(`${environment.apiUrl}/api/cuota/allMorosos`).pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  getGastos(): Observable<IMovements[]> {
    return this.http.get(`${environment.apiUrl}/api/cuentamovimiento/allGastos`).pipe(map(this.extractData),
      catchError(this.handleErrorObservable));
  }

  getMovimientos(): Observable<IMovements[]> {
    return this.http.get(`${environment.apiUrl}/api/cuentamovimiento/all`).pipe(map(this.extractData),
      catchError(this.handleErrorObservable));
  }

  createGasto(gasto: IMovements): Observable<IMovements> {
    return this.http.post(`${environment.apiUrl}/cuentamovimiento/addMovimiento`, gasto)
      .pipe(map(this.extractData), catchError(this.handleErrorObservable));
  }

  getCuotasById(): Observable<IFee[]> {
    return this.http.get(`${environment.apiUrl}/api/cuota/allByUser?usuarioId=${this.auth.getUserId()}`).pipe(map(this.extractData),
      catchError(this.handleErrorObservable));
  }

  addContrato(contrato: Contract) {
    return this.http.post(`${environment.apiUrl}/api/contract/add`, contrato)
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
