import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Consulta } from '../../app/app.module';
import { DetallesPeticionPage } from '../detalles-peticion/detalles-peticion';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  id_doctor: string 
  id_patient: string
  username: string
  filter_value: string = ""
  peticiones: Consulta[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider) {
    this.id_doctor = this.navParams.get('id')
    this.id_patient = this.navParams.get('idPaciente')
    this.username = this.navParams.get('usuario')
    if(this.username == undefined){
      this.username == ''
    }
    this.filter_value = this.username
    this.peticiones = []
    this.get_peticiones()
  }

  get_peticiones(){
    this.dbF.loadRespondByIdPaciente(this.id_patient).subscribe(res =>
      res.forEach(e => this.peticiones.push(e)))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

  filtered_peticiones(){
    var output = []
    for(let p of this.peticiones){
      if(this.filter_value == "" || p.paciente.includes(this.filter_value)){
        output.push(p)
      }
    }
    return output
  }

  goto_details(c: Consulta){
    this.navCtrl.push(DetallesPeticionPage, {
      id: this.id_doctor,
      usuario: this.username,
      idPaciente: c.idPaciente,
      idConsulta: c.idConsulta
    });
  }

}
