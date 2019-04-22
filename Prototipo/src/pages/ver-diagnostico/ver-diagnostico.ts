import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';



/**
 * Generated class for the VerDiagnosticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-diagnostico',
  templateUrl: 'ver-diagnostico.html',
})
export class VerDiagnosticoPage {

  idPaciente:string;
  nombrePaciente:string;
  anterior:string;
  historial:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF:FirebaseDbProvider) {
    this.idPaciente = navParams.get('id');
    this.nombrePaciente= navParams.get('usuario');
    this.dbF.loadRespondByIdPaciente(this.idPaciente).subscribe(
      res=>{
        this.historial= res;
        console.log(res);
    });
    
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerDiagnosticoPage');   
  }

  
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

  

}
