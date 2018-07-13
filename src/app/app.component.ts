import { Component, ViewChild } from "@angular/core";
import { MenuController, NavController, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";
import { AngularFireAuth } from "angularfire2/auth";
import { CategoriesPage } from "../pages/categories/categories";
import { AuthRepository } from "../repository/auth.repository";
import { ProductRepository } from "../repository/product.repository";
import { ProfilePage } from "../pages/profile/profile";
import { UploadedItemsPage } from "../pages/uploaded-items/uploaded-items";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  categoryPage: any = CategoriesPage;
  profilePage: any = ProfilePage;
  uploadedItemsPage: any = UploadedItemsPage;
  loginPage: any = LoginPage;
  @ViewChild("content") nav:NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl:MenuController,
    private fbService: AngularFireAuth,
    private authRepo: AuthRepository,
    private productRepo: ProductRepository) {
    platform.ready().then(() => {
      this.fbService.auth.onAuthStateChanged(user => {
        console.log("auth state changed");
        if (!user) {
          this.categoryPage = this.loginPage;
        } else {
          this.categoryPage = CategoriesPage;
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

  changeRoot(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

