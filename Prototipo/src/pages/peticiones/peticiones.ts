import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

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
  historial:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbF:FirebaseDbProvider) {
    this.idDoctor = navParams.get('id');
    this.usuario=navParams.get('usuario');
    this.dbF.loadConsults().subscribe(
      res=>{
        this.historial= res;
        console.log(res);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeticionesPage');
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
