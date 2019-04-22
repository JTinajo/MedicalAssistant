import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerDiagnosticoPage } from '../ver-diagnostico/ver-diagnostico';
import { PedirDiagnosticoPage } from '../pedir-diagnostico/pedir-diagnostico';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF:FirebaseDbProvider) {
    this.idPaciente = navParams.get('id');
    this.usuario=navParams.get('usuario');
    this.hospital=navParams.get('hospital');
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
