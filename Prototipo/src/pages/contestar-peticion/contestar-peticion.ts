import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContestarPeticionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contestar-peticion',
  templateUrl: 'contestar-peticion.html',
})
export class ContestarPeticionPage {
  idDoctor:string;
  usuario:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.idDoctor = navParams.get('id');
    this.usuario=navParams.get('usuario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContestarPeticionPage');
  }

}
