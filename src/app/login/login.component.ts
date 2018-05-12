import { ServerService } from "./../server.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms/src/directives/ng_form";
import { Validators } from "@angular/forms/src/validators";
import { FormControl, FormGroup } from "@angular/forms";
import { Response } from "@angular/http/src/static_response";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  isLoggedIn: Boolean= false;
  constructor(private serverService: ServerService, private router: Router) {}

  onlogin() {
    console.log(this.signupForm.value.userData.email);
    let email: string = this.signupForm.value.userData.email;
    let pass: string = this.signupForm.value.userData.pass;
    this.serverService
      .validateLogin(email, pass)
      .subscribe( (response: Response) => {
        if (response.json()) {
          this.router.navigateByUrl('/dashboard');
        } else {
          this.isLoggedIn = true;
          console.log('error');
        }

        console.log(response.json());



      });
    this.signupForm.reset();
  }
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null),
        pass: new FormControl(null)
      })
    });
  }
}
