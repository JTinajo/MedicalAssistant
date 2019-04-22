import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuDoctorPage } from '../menu-doctor/menu-doctor';
import { MenuPacientePage } from '../menu-paciente/menu-paciente';
import { RegistroPage } from '../registro/registro';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  IdUsuario:string;
  nombreUsuario:string;
  hospital: string;
  afiliacion: string;

  user: string;
  
  pass:string;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  irRegistro(): void {
    this.navCtrl.push(RegistroPage);   
 }

  irMenu():void{
    if (this.user==undefined || this.pass== undefined){
      alert("Por favor rellene el usuario y contraseña para loguearse");
      return;
    }
    console.log("verificamos"+this.user+"//"+this.pass);


    // iniciamos verificacion 
    this.esDoctor(this.user,this.pass);
            
  }

  esDoctor(user:string,pass:string){    
    this.dbF.loadDoctors().subscribe(
      res => {
        res.forEach(element => {
          console.log(element.usuario + "//"+element.pass);
          if(element.usuario== user && element.pass==pass){
          
             this.navCtrl.push(MenuDoctorPage,{
              id:element.idDoctor,
              usuario: element.usuario,
              hospital:element.hospital,
              afiliacion: element.afiliacion
              });

          }
        });
        // si llega aqui no es doctor, verificamos paciente
        this.esPaciente(user,pass);
      });
      
  }

  esPaciente(user:string,pass:string){
    this.dbF.loadPatients().subscribe(            
      res => {
        res.forEach(element => {
          console.log(element.usuario + "//"+element.pass);
          if(element.usuario== user && element.pass==pass){
                        
             this.navCtrl.push(MenuPacientePage,{
              id:element.idPaciente,
              usuario: element.usuario,
              hospital:element.hospital
              
              });
          }
        });
        
        this.IdUsuario="";
        this.nombreUsuario="";
    }); 

  }

}

