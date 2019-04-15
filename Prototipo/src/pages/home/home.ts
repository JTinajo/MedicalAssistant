import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// cargamos el provider de la base de datos
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public myPerson :any;

  constructor(public navCtrl: NavController, public dbF:FirebaseDbProvider ) {
  

  }

  
  navegar(): void {
    this.navCtrl.setRoot(LoginPage);
   console.log("navegando!!!")
 }
  

 ionViewWillEnter(){

   this.dbF.loadPatientPetition().subscribe(res=>{
    console.log(res);
    });


  /*const personRef: firebase.database.Reference = firebase.database().ref('/paciente/');
  personRef.on('value', personSnapshot => {
    this.myPerson = personSnapshot.val();
    
  });*/
  //console.log(this.myPerson);
}


}
