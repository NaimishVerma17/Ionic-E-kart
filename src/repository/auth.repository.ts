import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import {
  getLoggedInUserLoaded,
  getLoggedInUserLoading,
  RootState
} from "../reducers";
import "rxjs/add/operator/combineLatest"
import "rxjs/add/operator/take"
import { Login, LoginComplete, LoginFiled, LogoutSuccess } from "../actions/app.action";
import { User } from "../models/user.model";
import { LayoutServices } from "../services/layout.services";
import { AppService } from "../services/app.service";


@Injectable()
export class AuthRepository {
  constructor(private appService: AppService,
              private store: Store<RootState>,
              private layoutService: LayoutServices,) {
  }

  login(loginDetails: { email: string, password: string }) {

    let loaded$ = this.store.select(getLoggedInUserLoaded);
    let loading$ = this.store.select(getLoggedInUserLoading);
    let combineLatest$ = loaded$.combineLatest(loading$, (loaded, loading) => loaded || loading).take(1);
    combineLatest$.subscribe(status => {
      this.store.dispatch(new Login());
      if (!status) {
        this.appService.login(loginDetails.email, loginDetails.password)
          .then(data => {
            this.appService.setToken(data.user.refreshToken);
           this.saveUser(data.user.uid);
          }).catch(e => {
          this.store.dispatch(new LoginFiled());
          this.layoutService.showToast(e.message);
        })
      }
    });

  }

  register(userDetails) {
    return this.appService.register(userDetails.register_email, userDetails.register_password)
  }

  logout() {
    this.appService.logout().then(() => {
      this.appService.removeToken();
      this.store.dispatch(new LogoutSuccess());
    }).catch((e) => {
      this.layoutService.showToast(e.message);
    });
  }

  saveUser(uid:string){
    console.log("save user");
    this.appService.getUserDetailRef(uid).on("value", (user) => {
      const userDetails: User = user.val();
      this.store.dispatch(new LoginComplete(userDetails));
    });
  }

  getAuthToken(){
    return this.appService.getToken();
  }
}

