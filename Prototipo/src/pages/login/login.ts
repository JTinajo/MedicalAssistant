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
  doctor : boolean;
  usuario:string;
  user: string;
  historial: any;
  hospital: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider) {
    this.doctor = false;
    this.user = "";
    this.dbF.loadDoctorsId(this.user).subscribe(
      res => {
        this.hospital = res[0].hospital;
        console.log(res);



      })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  irRegistro(): void {
    this.navCtrl.push(RegistroPage);   
 }

  irMenu():void{
    // cargar datos y verificar
    console.log(this.user)    ;
    
    //TODO revisar si es medico o doctor
     this.doctor = (this.user == "1");

   


     this.usuario = this.usuario;
     //pruebas
    this.usuario = "pepito de momento";
    this.hospital = "arturo soria"
    
    if (this.doctor) {

      
      this.navCtrl.push(MenuDoctorPage,{
        id:this.user,
        usuario: this.usuario,
        hospital: this.hospital
        });
    }
    else {
      this.navCtrl.push(MenuPacientePage,{
        id:this.usuario,
        usuario:this.usuario
        });
    }
  }

}

