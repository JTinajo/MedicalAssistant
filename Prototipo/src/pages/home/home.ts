import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// cargamos el provides de la base de datos
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
db:FirebaseDbProvider;
  constructor(public navCtrl: NavController, public dbF:FirebaseDbProvider ) {
    this.db = dbF;
  }


  guarda(){
    this.db.setDatos();
  }
}
