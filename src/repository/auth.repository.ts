import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable"

import {AuthService} from "../services/auth.service";
import {getLoggedInUserLoaded, getLoggedInUserLoading, RootState} from "../reducers";
import 'rxjs/add/operator/combineLatest'
import 'rxjs/add/operator/take'
import {Login, LoginComplete, LoginFiled} from "../actions/app.action";
import {User} from "../models/user.model";
import {errorHandler} from "@angular/platform-browser/src/browser";


@Injectable()
export class AuthRepository {
  constructor(private authService: AuthService,
              private store: Store<RootState>) {
  }

  login(email: string, password: string) {

    this.authService.login(email, password)
      .then(res => {
        console.log(res);
        // this.store.dispatch(new LoginComplete())
        return true;
      })
      .catch(error => console.log(error));
    this.store.dispatch(new LoginFiled());

  }

  register(email: string, password: string) {
    try {
      const res = this.authService.register(email, password);
      console.log(res);
    } catch (e) {
      console.log(e);
      this.store.dispatch(new LoginFiled());
    }
  }
}
