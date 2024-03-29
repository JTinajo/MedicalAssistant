import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// cargamos el provider de la base de datos
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public myPerson :any;

  constructor(public navCtrl: NavController, public dbF:FirebaseDbProvider ) {
	 setTimeout(function(){ navCtrl.setRoot(LoginPage); }, 1250);

  }

  
  navegar(): void {
    this.navCtrl.setRoot(LoginPage);
 }
  

 ionViewWillEnter(){}


}
