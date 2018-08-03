import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "../reducers";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthRepository} from "../repository/auth.repository";
import {SignupPage} from "../pages/signup/signup";
import {LayoutServices} from "../services/layout.services";

import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CategoriesPage} from "../pages/categories/categories";
import {ComponentsModule} from "../components/components.module";
import { UploadItemPage } from "../pages/upload-item/upload-item";
import { ProductRepository } from "../repository/product.repository";
import { AppService } from "../services/app.service";
import { CategoryProductsPage } from "../pages/category-products/category-products";
import { ProductDetailsPage } from "../pages/product-details/product-details";
import { ProfilePage } from "../pages/profile/profile";
import { UploadedItemsPage } from "../pages/uploaded-items/uploaded-items";
import { Camera } from "@ionic-native/camera";
import { AngularFireStorageModule } from "angularfire2/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyD_caXvfUPN8xiSLLRkpmcR4IdicPzq0ac",
  authDomain: "ionic-e-kart.firebaseapp.com",
  databaseURL: "https://ionic-e-kart.firebaseio.com",
  projectId: "ionic-e-kart",
  storageBucket: "ionic-e-kart.appspot.com",
  messagingSenderId: "475670864180"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    UploadItemPage,
    CategoryProductsPage,
    ProductDetailsPage,
    ProfilePage,
    UploadedItemsPage
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 50}),
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    UploadItemPage,
    CategoryProductsPage,
    ProductDetailsPage,
    ProfilePage,
    UploadedItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppService,
    AuthRepository,
    ProductRepository,
    LayoutServices,
    Camera
  ]
})
export class AppModule {
}
