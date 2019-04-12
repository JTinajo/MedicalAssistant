import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	listaClientes:any;
  datos="--";

  constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {
	
  }
  
   guardar(){
	  this.dbFirebase.setDatos();
  }

  cargar(){
    this.datos = this.dbFirebase.getDatos();
  }

}
