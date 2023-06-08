import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authInfoSubject = new BehaviorSubject<LoginResponse | null>(null);
  authInfo$ = this.authInfoSubject.asObservable();
  isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload) {
    return this.http.post<LoginResponse>('/auth/login', payload);
  }

  saveAuthInfoInLocalStorage(authInfo: LoginResponse) {
    localStorage.setItem('authInfo', JSON.stringify(authInfo));
  }

  getAuthInfoFromLocalStorage() {
    const authInfo = localStorage.getItem('authInfo');
    if (authInfo) return JSON.parse(authInfo) as LoginResponse;
    return null;
  }

  setAuthInfo(authInfo: LoginResponse) {
    this.authInfoSubject.next(authInfo);
    this.isAuthenticated = true;
  }
}
