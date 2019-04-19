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

  nombrePaciente:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbF:FirebaseDbProvider) {
    this.idPaciente = navParams.get('id');
    this.nombrePaciente= navParams.get('usuario');
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedirDiagnosticoPage');
  }






  enviarPeticion(){

    if (this.edad ==undefined ||
      this.sintomas ==undefined ||
      this.fecha_sintomas ==undefined ||
      this.automedica ==undefined ||     
      this.descripcion ==undefined
      )
      {
        alert("rellene los campos")
      }
    else{

    if( this.medicamentos_paciente ==undefined ){
       this.medicamentos_paciente=["nada"];
      }
      this.consulta = new Consulta();    
      this.consulta.fecha_consulta = new Date().toISOString().substr(0,10);;
      this.consulta.edad= this.edad;
      this.consulta.sintomas=this.sintomas;
      this.consulta.fecha_sintomas=this.fecha_sintomas;    
      this.consulta.automedica=this.automedica;
      this.consulta.medicamentos_paciente=this.medicamentos_paciente;
      this.consulta.descripcion=this.descripcion;
      this.consulta.idPaciente= this.idPaciente;
      
      this.dbF.saveConsult(this.consulta);
      this.cancelar();
    }
  }

  // cancelar vuelve atras
  cancelar(){
    this.navCtrl.removeView(this.navCtrl.last());
  
  }

}
