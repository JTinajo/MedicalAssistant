import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LibretaContactosPage } from '../pages/libreta-contactos/libreta-contactos';
import { NuevoContactoPage } from '../pages/nuevo-contacto/nuevo-contacto';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// conexion a la base de firebase
export const fireBaseConfig = {

        apiKey: "AIzaSyDrhRswyLgQRG-bL1G3yfJdhT8dvWn-8GQ",
    authDomain: "micro06-a2b7b.firebaseapp.com",
    databaseURL: "https://micro06-a2b7b.firebaseio.com",
    projectId: "micro06-a2b7b",
    storageBucket: "micro06-a2b7b.appspot.com",
    messagingSenderId: "498332994944"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibretaContactosPage,
    NuevoContactoPage,
    AcercaDePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibretaContactosPage,
    NuevoContactoPage,
    AcercaDePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}
