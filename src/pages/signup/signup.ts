import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  name: FormControl;
  email: FormControl;
  city: FormControl;
  phoneNo: FormControl;
  password: FormControl;

  constructor() {
    this.name = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.city = new FormControl('', [Validators.required]);
    this.phoneNo = new FormControl('', [Validators.required, Validators.maxLength(10)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.formGroup = new FormGroup({
      'register_name': this.name,
      'register_email': this.email,
      'register_city': this.city,
      'register_phone': this.phoneNo,
      'register_password': this.password,
    });

  }

  registerUser() {
    console.log(this.formGroup.value);
  }


}
