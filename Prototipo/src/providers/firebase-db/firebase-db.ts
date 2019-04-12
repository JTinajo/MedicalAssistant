//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Paciente } from '../../app/app.module';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  /*constructor(public http: HttpClient) {
    console.log('PROVIDER MALO');
  }*/
  
	constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
  }
  
  //private clientesRef=this.afDB.list<Cliente>('clientes');

  private pacientePeticion=this.afDB.list<Paciente>('paciente/');
  //private doctorDiagnostico=this.afDB.list<Doctor>('doctorDiagnostico');

  /* 
	Añadir aqui las funciones necesarias para base de datos
	afDB.database.ref('CLAVE').set('VALOR');
  */
	 setDatos(pac:Paciente)
	 {
		//return this.clientesRef.valueChanges();
		 this.afDB.database.ref('paciente/'+pac.nombre).set(pac);
		console.log("llamando");
   } 
   
   getDatos(){
     return this.pacientePeticion.valueChanges();

   }


   /*

    PROYECTO
   */


   getPeticiones(){
    //return this.pacientePeticion.valueChanges();// doctor <- devolvemos los cambios guardados en firebase
   }

    getDiagnostico(){
    //return this.pacientePeticion.valueChanges();// paciente <-devolvemos los cambios guardados en firebase (no tenemos en cuenta el paciente)
   }

   setPeticion(){
    //this.afDB.database.ref('pacientePeticion').set('datos peticion'); //  peticion del paciente
   }

   setDiagnostico(){
    //this.afDB.database.ref('doctorDiagnostico').set('datos diagnostico'); // contestacion del doctor
   }

}
