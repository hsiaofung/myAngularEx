import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private _token: string = null;

  constructor() {}

  set token(token: string) {
    this._token = token;
  }
  get token() {
    return this._token;
  }
  isLoggedIn() {
    return this._token != null;
  }
}
