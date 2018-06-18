import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable"

import {AuthService} from "../services/auth.service";
import {getLoggedInUserLoaded, getLoggedInUserLoading, RootState} from "../reducers";
import 'rxjs/add/operator/combineLatest'
import 'rxjs/add/operator/take'
import {Login, LoginComplete, LoginFiled} from "../actions/app.action";
import {User} from "../models/user.model";


@Injectable()
export class AuthRepository {
  constructor(private authService: AuthService,
              private store: Store<RootState>) {
  }

  login(email:string,password:string) {
    const loaded$ = this.store.select(getLoggedInUserLoaded);
    const loading$ = this.store.select(getLoggedInUserLoading);
    const combineLatest$ = loaded$.combineLatest(loading$, (loaded, loading) => loaded || loading);
    combineLatest$.take(1).subscribe(status => {
      this.store.dispatch(new Login());
      if (!status) {
        this.authService.login().subscribe(data => {
            //this.store.dispatch(new LoginComplete(data.user))
          },
          error1 => this.store.dispatch(new LoginFiled()));
      }
    })
  }

  register(){
    this.authService.register();
  }
}
