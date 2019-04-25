import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from '../../app/app.module';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the DetallesPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles-paciente',
  templateUrl: 'detalles-paciente.html',
})
export class DetallesPacientePage {
  usuario: string;
  // datos consulta
  consulta: Consulta=new Consulta();
  idPaciente: string;
  idConsulta: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbF: FirebaseDbProvider) {
    this.idConsulta = navParams.get('idConsulta');
    this.idPaciente  = navParams.get('idPaciente');
    this.consulta.medicamentos_paciente=[];
    this.consulta.medicamentos_doctor=[];

    this.dbF.loadRespondByIdPaciente(this.idPaciente).subscribe(res=>{
      res.forEach(element => {
        if(element.idConsulta== this.idConsulta){
          this.consulta=element;
          if (!this.consulta.leido){
            this.consulta.leido=true;
            dbF.saveReadedRespond(this.consulta);
          }
        }
      });
      console.log(this.consulta);
    });
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPacientePage');
  }

}
