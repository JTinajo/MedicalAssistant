import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeticionesPage } from '../peticiones/peticiones';
import { HistorialPage } from '../historial/historial';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Doctor } from '../../app/app.module';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

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
  latitud=0.0;
  longitud=0.0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider,
    private platform: Platform, private geolocation: Geolocation) {
    this.idDoctor = navParams.get('id');
    this.usuario = navParams.get('usuario');
 
    this.dbF.loadDoctorsId(this.idDoctor).subscribe(
      res => {
        this.historial = res;
        console.log(res);
        this.hospital = "La Paz";
      });

      platform.ready().then(() => {

        // get current position
        geolocation.getCurrentPosition().then(pos => {
          console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          this.latitud=pos.coords.latitude;
          this.longitud = pos.coords.longitude;
        });
  
        const watch = geolocation.watchPosition().subscribe(pos => {
          console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          this.latitud=pos.coords.latitude;
          this.longitud = pos.coords.longitude;
        });
  
        // to stop watching
        watch.unsubscribe();
  
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
