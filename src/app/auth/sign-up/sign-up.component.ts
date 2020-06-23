import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public signUp() {
    this.authService.signUp(this.userData).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
