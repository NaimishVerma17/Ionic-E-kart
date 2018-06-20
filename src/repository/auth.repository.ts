import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

import {AuthService} from "../services/auth.service";
import {getLoggedInUserLoaded, getLoggedInUserLoading, RootState} from "../reducers";
import 'rxjs/add/operator/combineLatest'
import 'rxjs/add/operator/take'
import {Login, LoginComplete, LoginFiled} from "../actions/app.action";


@Injectable()
export class AuthRepository {
  constructor(private authService: AuthService,
              private store: Store<RootState>) {
  }

  login(loginDetails: { email: string, password: string }) {
    let loaded$ = this.store.select(getLoggedInUserLoaded);
    let loading$ = this.store.select(getLoggedInUserLoading);
    let combineLatest$ = loaded$.combineLatest(loading$, (loaded, loading) => loaded || loading).take(1);
    combineLatest$.subscribe(status => {
      this.store.dispatch(new Login());
      if (!status) {
        this.authService.login(loginDetails.email, loginDetails.password)
          .then(data => {
            console.log("success",data);
            this.authService.setToken(data.user.refreshToken);
            // this.store.dispatch(new LoginComplete())
          }).catch(e => this.store.dispatch(new LoginFiled()))
      }
    })

  }

  register(userDetails) {
    return this.authService.register(userDetails.register_email, userDetails.register_password)
  }
}

