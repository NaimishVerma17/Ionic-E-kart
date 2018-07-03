import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthRepository } from "../../repository/auth.repository";
import { LayoutServices } from "../../services/layout.services";
import { User } from "../../models/user.model";
import { NavController } from "ionic-angular";
import { AppService } from "../../services/app.service";


@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
})
export class SignupPage {

  formGroup: FormGroup;
  name: FormControl;
  email: FormControl;
  city: FormControl;
  phoneNo: FormControl;
  password: FormControl;

  constructor(private authRepo: AuthRepository,
              private layoutService: LayoutServices,
              private navCtrl: NavController,
              private appService: AppService) {
    this.name = new FormControl("", [Validators.required]);
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.city = new FormControl("", [Validators.required]);
    this.phoneNo = new FormControl("", [Validators.required, Validators.maxLength(10)]);
    this.password = new FormControl("", [Validators.required, Validators.minLength(6)]);
    this.formGroup = new FormGroup({
      "register_name": this.name,
      "register_email": this.email,
      "register_city": this.city,
      "register_phone": this.phoneNo,
      "register_password": this.password,
    });

  }

  registerUser() {
    const details = this.formGroup.value;
    const response = this.authRepo.register(details);
    response.then(user => {
      this.formGroup.reset();
      const userDetails: User = {
        id: user.user.uid,
        name: details.register_name,
        email: details.register_email,
        city: details.register_city,
        phoneNo: details.register_phone,
      };
      this.appService.setUserDetails(userDetails).then(status => {
        this.navCtrl.pop();
      });

    }).catch(error => {
      this.layoutService.showToast(error.message);
    })
  }


}
