import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../models/user.model';
import { Product } from '../models/product.model';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class AppService {
  constructor(private fbAuth: AngularFireAuth,
              private angularFireDb: AngularFireDatabase,
              private angularFireStorage:AngularFireStorage) {

  }

  login(email: string, password: string) {
    return this.fbAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.fbAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  setUserDetails(userDetails: User): Promise<any> {
    console.log(userDetails);
    return this.getUserDetailRef(userDetails.id).set(userDetails);
  }

  uploadProductImage(file:any,uniqueId:string){
    console.log('InService');
    return this.angularFireStorage.ref('product-images/'+uniqueId).putString(file,'base64');
  }

  getUserDetailRef(userId) {
    if (!userId) {
      return;
    }
    return this.angularFireDb.database.ref('/userProfile/' + userId);
  }

  logout(): Promise<any> {
    return this.fbAuth.auth.signOut();
  }

  setToken(token: string) {
    localStorage.setItem('Token', token);
  }

  getToken(): string {
    return localStorage.getItem('Token');
  }

  removeToken() {
    localStorage.removeItem('Token');
  }

  set(product: Product) {
    return this.angularFireDb.database.ref('/products/' + product.id).set(product);
  }

  getProductRef() {
    return this.angularFireDb.database.ref('/products/');
  }

}
