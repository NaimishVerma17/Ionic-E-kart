import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthRepository} from "../../repository/auth.repository";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupPage} from "../signup/signup";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  formGroup: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(public navCtrl: NavController, private authRepository: AuthRepository) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.formGroup = new FormGroup({
      'email': this.email,
      'password': this.password
    });

  }

  loginUser() {
    console.log(this.formGroup.value);
  }

  registerUser(){
    console.log("signup");
    this.navCtrl.push(SignupPage);
  }
}
