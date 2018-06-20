import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {User} from "../models/user.model";

@Injectable()
export class AuthService {
  constructor(private fbAuth: AngularFireAuth,
              private angularFireDb: AngularFireDatabase) {

  }

  login(email: string, password: string) {
    return this.fbAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.fbAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  setUserDetails(userDetails:User): Promise<any>{
    console.log(userDetails);
    return this.angularFireDb.database.ref("/userProfile/" + userDetails.id).set(userDetails);
  }

  logout(): Promise<any> {
    return this.fbAuth.auth.signOut();
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
