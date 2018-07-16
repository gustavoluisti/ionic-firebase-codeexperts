import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { SavePage } from '../pages/save/save';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HousePage } from './../pages/house/house';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SavePage,
    HousePage,
  ],
  imports: [
BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBpsNrg6SY3n7O0I1iwvqWYLzLNfY3eJxQ",
      authDomain: "fir-projectionic-ac08b.firebaseapp.com",
      databaseURL: "https://fir-projectionic-ac08b.firebaseio.com",
      projectId: "fir-projectionic-ac08b",
      storageBucket: "fir-projectionic-ac08b.appspot.com",
      messagingSenderId: "637049303690"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SavePage,
    HousePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
