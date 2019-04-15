import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerDiagnosticoPage } from '../ver-diagnostico/ver-diagnostico';
import { PedirDiagnosticoPage } from '../pedir-diagnostico/pedir-diagnostico';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPacientePage');
  }


  VerDiagnostico(){
    this.navCtrl.push(VerDiagnosticoPage);
  }
  PedirDiagnostico(){
    this.navCtrl.push(PedirDiagnosticoPage);
  }
}
