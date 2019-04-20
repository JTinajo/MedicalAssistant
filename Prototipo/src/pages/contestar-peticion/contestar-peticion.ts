import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from '../../app/app.module';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

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
  // datos consulta
  consulta:Consulta[];
  idPaciente:string;
  idConsulta:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbF:FirebaseDbProvider) {

    this.idDoctor = navParams.get('id');
    this.usuario=navParams.get('usuario');
    this.idPaciente = navParams.get('idPaciente');
    this.idConsulta=navParams.get('idConsulta');
    this.dbF.loadConsultsByIdConsultaPatient(this.idPaciente,this.idConsulta).subscribe(res=>{
      this.consulta = res; // se carga en consulta los datos de esta
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContestarPeticionPage');
  }

}
