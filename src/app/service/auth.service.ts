import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backEndUrl = 'https://biologytest.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  public signUp(user) {
    return this.http.post<any>(`${this.backEndUrl}/signup`, user);
  }

  public signIn(user) {
    return this.http.post<any>(`${this.backEndUrl}/signin`, user);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public logOut() {
    localStorage.removeItem('token');
  }
}
