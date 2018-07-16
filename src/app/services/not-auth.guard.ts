import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService, FIELD_NAME_SERVICE_ID } from './auth.service';

@Injectable()
export class NotAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (environment.primitiveAuth) {
      if (this.auth.isLoggedIn()) {
        this.router.navigate(['dashboard']);
        return false;
      } else {
        return true;
      }
    } else {
      const value = this.auth.getValue(FIELD_NAME_SERVICE_ID);
      if (value != null && typeof value === 'number') {
        this.router.navigate(['dashboard']);
        return false;
      } else {
        return true;
      }
    }

  }
}
