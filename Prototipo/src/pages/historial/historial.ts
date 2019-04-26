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
  username_patient: string
  filter_value: string = ""
  peticiones: Consulta[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider) {
    this.id_doctor = this.navParams.get('id')
    this.id_patient = this.navParams.get('idPaciente')
    this.username = this.navParams.get('usuario')
    this.username_patient  = this.navParams.get('usuario_paciente')
    if(this.username_patient == undefined){
      this.username_patient == ''
    }
    this.filter_value = this.username_patient
    this.peticiones = []
    this.get_peticiones()
    console.log('id doctor: ' + this.id_doctor)
    console.log('id patient: ' + this.id_patient)
    console.log('username: ' + this.username)
  }

  get_peticiones(){
    this.dbF.loadResponds().subscribe(res =>{
      console.log(res)
      res.forEach(e =>{
        for(let k of Object.keys(e)){
          this.peticiones.push(e[k])
        }
      })
      console.log(this.peticiones)
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

  filtered_peticiones(){
    var output = []
    console.log('filter value: ' + this.filter_value)
    for(let p of this.peticiones){
      if(this.filter_value === undefined || this.filter_value == "" || p.paciente === undefined || p.paciente.includes(this.filter_value)){
        output.push(p)
      }
    }
    return output
  }

  goto_details(c: Consulta){
    console.log('go to details page')
    console.log('this.id_doctor '  + this.id_doctor)
    console.log('usuario ' + this.username)
    console.log('c.idPaciente ' + c.idPaciente)
    console.log('c.idConsulta ' + c.idConsulta)

    this.navCtrl.push(DetallesPeticionPage, {
      id: this.id_doctor,
      usuario: this.username,
      idConsulta: c.idConsulta,
      idPaciente: c.idPaciente
    });

  }

}
