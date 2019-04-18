import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from '../../app/app.module';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the PedirDiagnosticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedir-diagnostico',
  templateUrl: 'pedir-diagnostico.html',
})
export class PedirDiagnosticoPage {
  idPaciente:string;
  consulta:Consulta;
  // datos para consulta
  edad:number;
  sintomas:string[];
  fecha_sintomas:Date;
  automedica?:boolean;
  medicamentos_paciente?:string[];
  descripcion:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbF:FirebaseDbProvider) {
    this.idPaciente="pepito de momento";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedirDiagnosticoPage');
  }






  enviarPeticion(){
    this.consulta = new Consulta();
    this.consulta.edad= this.edad;
    this.consulta.sintomas=this.sintomas;
    this.consulta.fecha_sintomas=this.fecha_sintomas;
    this.consulta.automedica=this.automedica;
    this.consulta.medicamentos_paciente=this.medicamentos_paciente;
    this.consulta.descripcion=this.descripcion;
    this.consulta.idPaciente= this.idPaciente;
    this.consulta.idConsulta= this.idPaciente;
    this.dbF.saveConsult(this.consulta);
  }

  cancelar(){

  
  }

  // prueba de seleccion de datos
  seleccion(){
    console.log(this.sintomas); 
  }

}
