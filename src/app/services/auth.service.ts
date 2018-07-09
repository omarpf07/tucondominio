import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import {  IUser } from '../beans';

const STORAGE_KEY = 'tc-manager-jwt';

const USERNAME_KEY = 'tc-user-login-key-name';
const USERID_KEY = 'tc-user-login-key-id';
const DISPLAYNAME_KEY = 'tc-user-login-key-display';
const ISADMIN_KEY = 'tc-user-login-key-rol';

export const FIELD_NAME_SERVICE_ID = 'serviceId';
const FIELD_NAME_USER_ID = 'userId';
const FIELD_NAME_ROL_ID = 'roles';
const FIELD_NAME_EXPIRATION_DATE = 'exp';
const FIELD_NAME_USER_EMAIL = 'email';
const FIELD_NAME_USER_DISPLAY = 'displayName';

@Injectable()
export class AuthService {

  constructor(private router: Router, private sharedService: SharedService) { }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  isGroupAdmin() {
    return this.getISADMIN() !== null && this.getRolId() >= 3;
  }

  isAdmin() {
    return this.getRolId() !== null && this.getRolId() > 3;
  }

  getValue(field: string): string {
    let returnValue = null;
    const token = this.getToken();

    if (token !== null) {
      const array_payload_token = token.split('.');
      if (array_payload_token.length === 3) {
        const raw_payload_token = array_payload_token[1];
        const decodedStringToken = atob(raw_payload_token);

        try {
          const token_payload = JSON.parse(decodedStringToken);

          switch (field) {
            case FIELD_NAME_SERVICE_ID:
              returnValue = token_payload.serviceId;
              break;
            case FIELD_NAME_USER_ID:
              returnValue = token_payload.userId;
              break;
            case FIELD_NAME_ROL_ID:
              returnValue = token_payload.roles;
              break;
            case FIELD_NAME_EXPIRATION_DATE:
              returnValue = token_payload.exp;
              break;
            case FIELD_NAME_USER_EMAIL:
              returnValue = token_payload.email;
              break;
            case FIELD_NAME_USER_DISPLAY:
              returnValue = token_payload.displayName;
              break;
            default:
              returnValue = null;
              break;
          }

        } catch (err) { /*console.log("Error at getting json from token -> " + err);*/ }

      }
    }

    if (returnValue == null && this.router.url !== '/login') {
      this.logout();
    }

    return returnValue;
  }

  logout() {
    this.saveStateAndCleanResorces();
    this.router.navigate(['/login']);
  }

  saveStateAndCleanResorces() {
    sessionStorage.clear();

    localStorage.removeItem(STORAGE_KEY);

    if (environment.primitiveAuth) {
      localStorage.removeItem(USERNAME_KEY);
      localStorage.removeItem(GROUP_KEY);
      localStorage.removeItem(USERID_KEY);
      localStorage.removeItem(DISPLAYNAME_KEY);
      localStorage.removeItem(COMPANYNAME_KEY);
      localStorage.removeItem(ROLID_KEY);
    }
  }

  getToken() {
    return localStorage.getItem(STORAGE_KEY);
  }

  getUserName() {
    return environment.primitiveAuth ? localStorage.getItem(USERNAME_KEY) : this.getValue(FIELD_NAME_USER_EMAIL);
  }

  getUserGroup() {
    return environment.primitiveAuth ? +localStorage.getItem(GROUP_KEY) : +this.getValue(FIELD_NAME_SERVICE_ID);
  }

  getUserId() {
    return environment.primitiveAuth ? +localStorage.getItem(USERID_KEY) : +this.getValue(FIELD_NAME_USER_ID);
  }

  getUserDisplay() {
    return environment.primitiveAuth ? localStorage.getItem(DISPLAYNAME_KEY) : this.getValue(FIELD_NAME_USER_DISPLAY);
  }

  getRolId() {
    return environment.primitiveAuth ? +localStorage.getItem(ROLID_KEY) : +this.getValue(FIELD_NAME_ROL_ID);
  }

  getExpirationAt() {
    return environment.primitiveAuth ? '' : this.getValue(FIELD_NAME_EXPIRATION_DATE);
  }

  setToken(token: string) {
    localStorage.setItem(STORAGE_KEY, token);
  }

  setUserName(username: string) {
    localStorage.setItem(USERNAME_KEY, username);
  }

  setUserGroup(group: string) {
    localStorage.setItem(GROUP_KEY, group);
  }

  setUserId(id: string) {
    localStorage.setItem(USERID_KEY, id);
  }

  setUserDisplay(display: string) {
    localStorage.setItem(DISPLAYNAME_KEY, display);
  }

  setCompanyName(companyname: string) {
    localStorage.setItem(COMPANYNAME_KEY, companyname);
  }

  setRolId(rolId: string) {
    localStorage.setItem(ROLID_KEY, rolId);
  }

  setAllUserData(user: IUser, services: IService[]) {
    this.setToken('1234567890');
    this.setUserName(user.email);
    this.setUserGroup(user.serviceId.toString());
    this.setUserId(user.userId.toString());
    this.setUserDisplay(user.displayName);
    this.setRolId(this.getUserRole(user.profile).toString());
    this.setCompanyName(this.getUserServiceId(services, user.serviceId));
  }

  getUserRole(profile: IProfile): number {
    return profile.profileRoles ? Math.max.apply(Math, profile.profileRoles.map(item => item.rolId)) : 0;
  }
  getUserServiceId(services: IService[], serviceId: number): string {
    return services ? services.filter(item => serviceId === item.serviceId)[0].companyName + '' : '';
  }
}
