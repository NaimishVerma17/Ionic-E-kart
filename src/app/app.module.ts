import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "../reducers";
import {ToolbarComponent} from "../components/toolbar/toolbar";
import {AuthService} from "../services/auth.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(rootReducer),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
