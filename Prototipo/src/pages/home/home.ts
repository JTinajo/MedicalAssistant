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



  constructor(public navCtrl: NavController, public dbF:FirebaseDbProvider ) {
  

  }

  
  navegar(): void {
    this.navCtrl.setRoot(LoginPage);
   console.log("navegando!!!")
 }
  


}
