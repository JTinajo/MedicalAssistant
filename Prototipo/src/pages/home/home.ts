import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	listaClientes:any;


  constructor(public navCtrl: NavController,public dbFirebase:FirebaseDbProvider) {
	
  }
  
   hola(){
	  this.dbFirebase.getClientes();
  }

}
