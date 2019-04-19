import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuDoctorPage } from '../menu-doctor/menu-doctor';
import { MenuPacientePage } from '../menu-paciente/menu-paciente';
import { RegistroPage } from '../registro/registro';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctor=false;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  irRegistro(): void {
    this.navCtrl.push(RegistroPage);   
 }

  irMenu(usuario:string):void{
    // cargar datos y verificar
    
    
    //TODO revisar si es medico o doctor
     this.doctor = (usuario == "pepe");


     this.usuario = usuario;
     //pruebas
     this.usuario = "pepito de momento";
    if(this.doctor){
      this.navCtrl.push(MenuDoctorPage,{
        id:this.usuario,
        usuario:this.usuario
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
