import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { User } from '../beans';

const STORAGE_KEY = 'tc-manager-jwt';

const USERNAME_KEY = 'tc-user-login-key-name';
const USERID_KEY = 'tc-user-login-key-id';
const DISPLAYNAME_KEY = 'tc-user-login-key-display';
const ISADMIN_KEY = 'tc-user-login-key-admin';
const CONDOMINIUM_KEY = 'tc-user-login-key-condominium';
const CONTRACT_KEY = 'tc-user-login-key-condominium';


@Injectable()
export class AuthService {

  constructor(private router: Router, private sharedService: SharedService) { }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    this.saveStateAndCleanResorces();
    this.router.navigate(['/login']);
  }

  saveStateAndCleanResorces() {
    sessionStorage.clear();

    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(DISPLAYNAME_KEY);
    localStorage.removeItem(ISADMIN_KEY);
    localStorage.removeItem(CONTRACT_KEY);
  }

  getToken() {
    return localStorage.getItem(STORAGE_KEY);
  }

  getUserName() {
    return localStorage.getItem(USERNAME_KEY);
  }

  getUserCondominiumId() {
    return +localStorage.getItem(CONDOMINIUM_KEY);
  }

  getUserId() {
    return +localStorage.getItem(USERID_KEY);
  }

  getUserDisplayName() {
    return localStorage.getItem(DISPLAYNAME_KEY);
  }

  isAdmin(admin?: boolean) {
    if (admin !== undefined) {
      localStorage.setItem(ISADMIN_KEY, admin.toString());
    } else {
      return +localStorage.getItem(ISADMIN_KEY);
    }
  }

  getExpirationAt() {
    return '';
  }

  setToken(token: string) {
    localStorage.setItem(STORAGE_KEY, token);
  }

  setUserName(username: string) {
    localStorage.setItem(USERNAME_KEY, username);
  }

  setUserCondominiumId(id: string) {
    localStorage.setItem(CONDOMINIUM_KEY, id);
  }

  setUserId(id: string) {
    localStorage.setItem(USERID_KEY, id);
  }

  setUserDisplayName(name: string) {
    localStorage.setItem(DISPLAYNAME_KEY, name);
  }

  setContractId(id: string) {
    localStorage.setItem(CONTRACT_KEY, id);
  }

  setAllUserData(user: User) {
    this.setToken(`${Math.floor(Math.random() * 1000)}`);
    this.setUserName(user.nombre);
    // this.setUserCondominiumId(user.condominiumId.toString());
    this.setUserId(user.usuarioId.toString());
    this.setUserDisplayName(user.nombre + user.apellido);
  }
}
