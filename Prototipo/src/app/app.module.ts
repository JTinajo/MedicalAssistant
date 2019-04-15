import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ContestarPeticionPage } from '../pages/contestar-peticion/contestar-peticion';
import { DetallesPeticionPage } from '../pages/detalles-peticion/detalles-peticion';
import { HistorialPage } from '../pages/historial/historial';
import { MenuDoctorPage } from '../pages/menu-doctor/menu-doctor';
import { MenuPacientePage } from '../pages/menu-paciente/menu-paciente';
import { PedirDiagnosticoPage } from '../pages/pedir-diagnostico/pedir-diagnostico';
import { PeticionesPage } from '../pages/peticiones/peticiones';
import { RegistroPage } from '../pages/registro/registro';
import { VerDiagnosticoPage } from '../pages/ver-diagnostico/ver-diagnostico';

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
  idPaciente: Number;
  nombre: string;
  edad: number;
}

export class Doctor {
  idDoctor: Number;
  nombre: string;
  edad:number;
}

export class Consulta {
  
  sintomas:string[];
  fecha_sintomas:Date;
  automedica?:boolean;
  medicamentos_paciente?:string[];
  descripcion:string;
  
  respuesta?:string;
  medicamentos_doctor?:string[];
  idConsulta?:number;  
  idPaciente?:number;
  idDoctor?:number;
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContestarPeticionPage,
    DetallesPeticionPage,
    HistorialPage,
    MenuDoctorPage,
    MenuPacientePage,
    PedirDiagnosticoPage, 
    PeticionesPage,
    RegistroPage,
    VerDiagnosticoPage 
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
    LoginPage,
    ContestarPeticionPage,
    DetallesPeticionPage,
    HistorialPage,
    MenuDoctorPage,
    MenuPacientePage,
    PedirDiagnosticoPage, 
    PeticionesPage,
    RegistroPage,
    VerDiagnosticoPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider
  ]
})
export class AppModule {}
