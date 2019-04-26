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
  consulta: Consulta=new Consulta();
  idPaciente: string;
  idConsulta: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF: FirebaseDbProvider) {
    this.idDoctor = navParams.get('id');
    this.usuario = navParams.get('usuario');
    this.idPaciente = navParams.get('idPaciente');
    this.idConsulta = navParams.get('idConsulta');
    this.consulta.medicamentos_paciente=[];
    this.consulta.medicamentos_doctor=[];
    if(navCtrl.last().name.includes('Historial')){
      this.dbF.loadRespondByIdPaciente(this.idPaciente).subscribe(res=>{
        res.forEach(element => {
          if(element.idConsulta== this.idConsulta){
            this.consulta=element;
          }
        });
        console.log(this.consulta);
      });
  
    } else{
      this.dbF.loadConsultsByIdPaciente(this.idPaciente).subscribe(res=>{
        res.forEach(element => {
          if(element.idConsulta== this.idConsulta){
            this.consulta=element;
          }
        });
        console.log(this.consulta);
      });
    }
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
