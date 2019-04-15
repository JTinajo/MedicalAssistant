import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Paciente, Doctor } from '../../app/app.module';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  
  usuario: string;
  pass: string;
  tlf: string;
  email:string;
  NSS: number;
  fechaNac: Date;

  paciente: Paciente;
  doctor: Doctor;
  tipo:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbF:FirebaseDbProvider ) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  IniciarSesion(){
    console.log(this.pass)
    if (this.pass == undefined ||
      this.tlf == undefined ||
      this.email == undefined ||
      this.NSS == undefined ||
      this.fechaNac == undefined ){
      console.log("ALGO ESTA ROTO");
    }
    else {
      this.tipo= this.NSS %2==1;
      console.log(this.tipo);

      if( this.tipo){ // daremos pares para pacientes e impares para doctores
        this.paciente = new Paciente();
        this.paciente.usuario=this.usuario;
        this.paciente.pass=this.pass;
        this.paciente.tlf=this.tlf;
        this.paciente.email=this.email;
        this.paciente.NSS=this.NSS;
        this.paciente.fechaNac=this.fechaNac;


        this.dbF.savePatient(this.paciente);
      }
      else {
        this.doctor= new Doctor();
        this.doctor.usuario=this.usuario;
        this.doctor.pass=this.pass;
        this.doctor.tlf=this.tlf;
        this.doctor.email=this.email;
        this.doctor.NSS=this.NSS;
        this.doctor.fechaNac=this.fechaNac;

        this.dbF.saveDoctoc(this.doctor);
      }
      this.navCtrl.push(LoginPage);
    }
    
    
  }

  Cancelar(){
    this.navCtrl.popToRoot();
  }

}
