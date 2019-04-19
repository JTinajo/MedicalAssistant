import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idDoctor = navParams.get('id');
    this.usuario=navParams.get('usuario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDoctorPage');
  }

}
