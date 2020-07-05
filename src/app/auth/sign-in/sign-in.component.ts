import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public userData = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService,
              private router: Router)
  { }

  ngOnInit() {
  }

  public signIn(): void {
    this.authService.signIn(this.userData)
      .subscribe((res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
        error => console.log(error));
  }

}
