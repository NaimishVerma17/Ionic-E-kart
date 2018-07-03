import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "../reducers";
import {AuthService} from "../services/auth.service";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthRepository} from "../repository/auth.repository";
import {SignupPage} from "../pages/signup/signup";
import {LayoutServices} from "../services/layout.services";
import {AppService} from "../services/app.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {CategoriesPage} from "../pages/categories/categories";
import {ComponentsModule} from "../components/components.module";
import { UploadItemPage } from "../pages/upload-item/upload-item";

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
    UploadItemPage
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({maxAge: 50}),
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    UploadItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AuthRepository,
    LayoutServices,
    AppService
  ]
})
export class AppModule {
}
