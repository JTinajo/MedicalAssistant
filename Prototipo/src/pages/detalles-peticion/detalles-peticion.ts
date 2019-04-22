import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from '../../app/app.module';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { HistorialPage } from '../historial/historial';

/**
 * Generated class for the DetallesPeticionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles-peticion',
  templateUrl: 'detalles-peticion.html',
})
export class DetallesPeticionPage {
  idDoctor: string;
  usuario: string;
  // datos consulta
  consulta: Consulta[];
  idPaciente: string;
  idConsulta: string;
  fecha: Consulta;
  fecha2: Consulta;
  sintomas: Consulta;
  recetas: Consulta;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider) {
    this.idDoctor = navParams.get('id');
    this.usuario = navParams.get('usuario');

    this.idDoctor = navParams.get('id');
    this.usuario = navParams.get('usuario');
    this.idPaciente = navParams.get('idPaciente');
    this.idConsulta = navParams.get('idConsulta');
    this.dbF.loadConsultsByIdConsultaPatient(this.idPaciente, this.idConsulta).subscribe(res => {
      this.consulta = res; // se carga en consulta los datos de esta
      this.fecha = this.consulta[3];
      this.fecha2 = this.consulta[4];
      this.sintomas = this.consulta[8];
      this.recetas = this.consulta[7];
    });
    


  }



  VerHistorial() {
    this.navCtrl.push(HistorialPage, {
      id: this.idDoctor,
      usuario: this.usuario,
      idPaciente: this.idPaciente
    });
  }








  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPeticionPage');
  }

}
