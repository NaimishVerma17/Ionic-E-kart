import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "../reducers";
import {ToolbarComponent} from "../components/toolbar/toolbar";
import {AuthService} from "../services/auth.service";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthRepository} from "../repository/auth.repository";
import {SignupPage} from "../pages/signup/signup";

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
    ToolbarComponent,
    SignupPage
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AuthRepository
  ]
})
export class AppModule {
}
