import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthService {
  constructor(private fbAuth: AngularFireAuth) {

  }

  login(email: string, password: string) {
    return this.fbAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.fbAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Observable<Object> {
    return;
  }

  setToken(token: string) {
    localStorage.setItem("Token", token);
  }

  getToken(): string {
    return localStorage.getItem("Token");
  }

  removeToken() {
    localStorage.removeItem("Token");
  }
}
