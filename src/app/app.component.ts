import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";
import { AngularFireAuth } from "angularfire2/auth";
import { CategoriesPage } from "../pages/categories/categories";
import { AuthRepository } from "../repository/auth.repository";
import { ProductRepository } from "../repository/product.repository";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = CategoriesPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private fbService: AngularFireAuth,
    private authRepo: AuthRepository,
    private productRepo: ProductRepository) {
    platform.ready().then(() => {
      this.fbService.auth.onAuthStateChanged(user => {
        console.log("auth state changed");
        if (!user) {
          this.rootPage = LoginPage;
        } else {
          this.rootPage = CategoriesPage;
          this.authRepo.saveUser(user.uid);
          this.initialiseStore();
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  initialiseStore() {
    this.productRepo.fetchProducts();
  }
}

