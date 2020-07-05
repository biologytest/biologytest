import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userData = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService,
              private router: Router)
  { }

  ngOnInit() {
  }

  public signUp() {
    this.authService.signUp(this.userData)
      .subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
    });
  }

}
