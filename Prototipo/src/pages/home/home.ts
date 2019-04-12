import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// cargamos el provider de la base de datos
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Paciente } from '../../app/app.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
db:FirebaseDbProvider;
  constructor(public navCtrl: NavController, public dbF:FirebaseDbProvider ) {
    this.db = dbF;
  }

  listaPac:any;

  pac:Paciente;
  guarda(){
    
    this.pac = new Paciente();
    this.pac.nombre = "pepe";
    this.pac.valor = 33;
    this.db.setDatos(this.pac);
  }


  ionViewDidEnter()
 {
 this.db.getDatos().subscribe(pacs=>{this.listaPac=pacs;});
 }
}
