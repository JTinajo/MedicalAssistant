import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerDiagnosticoPage } from '../ver-diagnostico/ver-diagnostico';
import { PedirDiagnosticoPage } from '../pedir-diagnostico/pedir-diagnostico';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the MenuPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-paciente',
  templateUrl: 'menu-paciente.html',
})
export class MenuPacientePage {
  usuario : string;
  idPaciente:string;
  hospital: string;
  latitud=0.0;
  longitud=0.0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF:FirebaseDbProvider, 
    private platform: Platform, private geolocation: Geolocation) {
    this.idPaciente = navParams.get('id');
    this.usuario=navParams.get('usuario');
    this.hospital=navParams.get('hospital');

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
    console.log('ionViewDidLoad MenuPacientePage');
  }


  VerDiagnostico(){
    this.navCtrl.push(VerDiagnosticoPage,{
      id:this.idPaciente,
      usuario:this.usuario
      });
  }
  PedirDiagnostico(){
    this.navCtrl.push(PedirDiagnosticoPage,{
      id:this.idPaciente,
      usuario:this.usuario
      });
  }
}
