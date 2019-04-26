import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta, Doctor } from '../../app/app.module';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { HistorialPage } from '../historial/historial';

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
  consulta:Consulta;
  idPaciente:string;
  idConsulta:string;
  medicamento: string[];
  doctor: Doctor;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public dbF:FirebaseDbProvider) {

    this.idDoctor = navParams.get('id');
    this.usuario=navParams.get('usuario');
    this.idPaciente = navParams.get('idPaciente');
    this.idConsulta=navParams.get('idConsulta');
    this.consulta = new Consulta();
    this.consulta.medicamentos_paciente=[];
    this.consulta.sintomas = [];
    this.consulta.medicamentos_doctor=[];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContestarPeticionPage');
  }

  ngOnInit(){
    this.dbF.loadConsultsByIdPaciente(this.idPaciente).subscribe(res=>{
  
      res.forEach(element => {  
        console.log("element " + element)
        if(element.idConsulta== this.idConsulta){
          this.consulta=element;
        }
      });
      console.log(this.consulta);
    });

  }

  goto_history(){
    this.navCtrl.push(
      HistorialPage, {
        id: this.idDoctor,
        usuario: this.usuario,
        usuario_paciente: this.consulta.paciente,
        idPaciente: this.idPaciente
      }
    )
  }

  update_consulta(){
    this.consulta.medicamentos_doctor = this.medicamento;
    this.dbF.updateConsulta(this.consulta)
    this.navCtrl.pop()
  }

}
