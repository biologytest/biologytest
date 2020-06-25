import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public signIn(): void {
    this.authService.signIn(this.userData)
      .subscribe((data) => console.log(data),
        error => console.log(error));
  }

}
