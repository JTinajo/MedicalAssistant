import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const fireBaseConfig={
	apiKey: "AIzaSyCt8ghk0jefWuxiIL_zGD_-WsCFGceNOzE",
    authDomain: "medicalassistantg-9.firebaseapp.com",
    databaseURL: "https://medicalassistantg-9.firebaseio.com",
    projectId: "medicalassistantg-9",
    storageBucket: "medicalassistantg-9.appspot.com",
    messagingSenderId: "373080706394"
}

export class Paciente {
  idConsulta: Number;
  nombre: string;
  peticion: string;
  valor: Number;
}

export class Doctor {
  idConsulta: Number;
  nombre: string;
  respuesta: string;
  valor: Number;
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
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
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider
  ]
})
export class AppModule {}
