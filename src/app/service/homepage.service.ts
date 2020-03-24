import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private router: Router) { }

  canActivate(): any {
    return this.router.navigateByUrl('/home');
  }
}
