import { Router } from '@angular/router';
import { NgForm } from "@angular/forms/src/directives/ng_form";
import { ServerService } from './../server.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  unableToRegister: Boolean;
  signupForm: FormGroup;

  constructor(private serverService: ServerService, private router: Router) { }
  onRegister()
  {
    let email: string = this.signupForm.value.userData.email;
    let pass: string = this.signupForm.value.userData.pass;
    let name: string = this.signupForm.value.userData.name;
    this.serverService
    .registerNewUser(email, pass, name)
    .subscribe( (response: Response) => {
        if (response.json()) {
          this.router.navigateByUrl('/dashboard');
        } else {
          this.unableToRegister = true;
        }
      } );
      this.signupForm.reset();
  }
  ngOnInit() {
    this.signupForm = new FormGroup({
        userData: new FormGroup({
          email: new FormControl(null),
          pass: new FormControl(null),
          name: new FormControl(null)
        })
    });
  }

}
