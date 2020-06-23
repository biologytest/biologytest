import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backEndUrl = 'http://localhost:3000/api/signup';

  constructor(private http: HttpClient) { }

  public signUp(user) {
    return this.http.post<any>(this.backEndUrl, user);
  }
}
