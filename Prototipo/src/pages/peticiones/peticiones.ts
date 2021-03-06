import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Consulta, Paciente } from '../../app/app.module';
import { ContestarPeticionPage } from '../contestar-peticion/contestar-peticion';
import { DetallesPeticionPage } from '../detalles-peticion/detalles-peticion';

/**
 * Generated class for the PeticionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peticiones',
  templateUrl: 'peticiones.html',
})
export class PeticionesPage {
  idDoctor:string;
  usuario:string;
  anterior:string;
  historial:Consulta[];  
  pacientes:Paciente[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF:FirebaseDbProvider) {
    this.idDoctor = navParams.get('id');
    this.usuario=navParams.get('usuario');

    this.dbF.loadPatients().subscribe( pacs =>{
      this.pacientes=pacs;
      this.historial=[];
      this.pacientes.forEach(element => {
        this.dbF.loadConsultsByIdPaciente(element.idPaciente).subscribe(res =>{
          res.forEach(element => {
            this.historial.push(element);
            console.log("sacamos de "+element+"=>>"+res)
          });      
          
        });
      });
      
    });

    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeticionesPage');
  }
 
  /**
   * 
   * @param id del elemento a mostrar rapido
   */
  peticioninfo(id:string){
    
    if(this.anterior!=undefined){
      document.getElementById(this.anterior).style.display = "none";
    }
    if (this.anterior!=id){
    document.getElementById(id).style.display = "inline";
    this.anterior=id;
    }else {
      this.anterior=undefined;
    }
    
  }

  /**
   *  Navegar a responder peticion, se envia los datos necesarios para sacar la peticion de firebase
   * @param idConsulta id con la consulta a responder
   * @param idPaciente id del paciente que hizo la consulta
   */
  entrarPeticion(idConsulta:string,idPaciente:string){
    
    this.navCtrl.push(ContestarPeticionPage, {
      id: this.idDoctor,
      usuario: this.usuario,
      idConsulta : idConsulta,
      idPaciente: idPaciente
    });
    

  }


  verPeticion(idConsulta: string, idPaciente: string) {

    this.navCtrl.push(DetallesPeticionPage, {
      id: this.idDoctor,
      usuario: this.usuario,
      idConsulta: idConsulta,
      idPaciente: idPaciente
    });


  }



}
