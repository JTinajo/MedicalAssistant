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

  historial:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF:FirebaseDbProvider) {
    this.idPaciente = "pepito de momento";
    this.dbF.loadConsultsByIdPaciente(this.idPaciente).subscribe(
      res=>{
        this.historial= res;
        console.log(res);
    });
    
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerDiagnosticoPage');   
  }

  public clicks1 = 0;
  public clicks2 = 0;
  public clicks3 = 0;
  
  peticioninfo1(){
    console.log(this.historial);
    
    if(this.clicks1==0){
      document.getElementById("p1").style.display = "inline";
      document.getElementById("p2").style.display = "none";
      document.getElementById("p3").style.display = "none";
      this.clicks1=1;
      this.clicks2=0;
      this.clicks3=0;
    }else{
      document.getElementById("p1").style.display = "none";
      document.getElementById("p2").style.display = "none";
      document.getElementById("p3").style.display = "none";
      this.clicks1=0;
    }
    
  }

  peticioninfo2(){
    
    if(this.clicks2==0){
      document.getElementById("p1").style.display = "none";
      document.getElementById("p2").style.display = "inline";
      document.getElementById("p3").style.display = "none";
      this.clicks2=1;
      this.clicks3=0;
      this.clicks1=0;
    }else{
      document.getElementById("p1").style.display = "none";
      document.getElementById("p2").style.display = "none";
      document.getElementById("p3").style.display = "none";
      this.clicks2=0;
    }
    
  }

  peticioninfo3(){
    
    if(this.clicks3==0){
      document.getElementById("p1").style.display = "none";
      document.getElementById("p2").style.display = "none";
      document.getElementById("p3").style.display = "inline";
      this.clicks3=1;
      this.clicks2=0;
      this.clicks1=0;
    }else{
      document.getElementById("p1").style.display = "none";
      document.getElementById("p2").style.display = "none";
      document.getElementById("p3").style.display = "none";
      this.clicks3=0;
    }
    
  }

}
