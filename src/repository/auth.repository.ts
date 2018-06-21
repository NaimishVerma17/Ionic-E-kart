import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

import {AuthService} from "../services/auth.service";
import {getLoggedInUserLoaded, getLoggedInUserLoading, RootState} from "../reducers";
import 'rxjs/add/operator/combineLatest'
import 'rxjs/add/operator/take'
import {Login, LoginComplete, LoginFiled} from "../actions/app.action";
import {User} from "../models/user.model";
import {LayoutServices} from "../services/layout.services";


@Injectable()
export class AuthRepository {
  constructor(private authService: AuthService,
              private store: Store<RootState>,
              private layoutService: LayoutServices) {
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
            this.authService.setToken(data.user.refreshToken);
            this.authService.getUserDetailRef(data.user.uid).on("value", (user) => {
              const userDetails: User = user.val();
              this.store.dispatch(new LoginComplete(userDetails));
            });
          }).catch(e => {
          this.store.dispatch(new LoginFiled());
          this.layoutService.showToast(e.message);
        })
      }
    });

  }

  register(userDetails) {
    return this.authService.register(userDetails.register_email, userDetails.register_password)
  }
}

