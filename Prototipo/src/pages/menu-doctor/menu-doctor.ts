import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeticionesPage } from '../peticiones/peticiones';
import { HistorialPage } from '../historial/historial';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Doctor } from '../../app/app.module';

/**
 * Generated class for the MenuDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-doctor',
  templateUrl: 'menu-doctor.html',
})
export class MenuDoctorPage {
  idDoctor:string;
  usuario:string;
  hospital: string;
  historial: Doctor[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider) {
    this.idDoctor = navParams.get('id');
    this.usuario = navParams.get('usuario');
 
    this.dbF.loadDoctorsId(this.idDoctor).subscribe(
      res => {
        this.historial = res;
        console.log(res);
        this.hospital = "La Paz";



      });

    

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDoctorPage');
  }


  VerPeticiones() {
    this.navCtrl.push(PeticionesPage, {
      id: this.idDoctor,
      usuario: this.usuario
    });
  }
  VerHistorial() {
    this.navCtrl.push(HistorialPage, {
      id: this.idDoctor,
      usuario: this.usuario
    });
  }

}
