//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Paciente, Doctor } from '../../app/app.module';



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
  
  private pacientePeticion=this.afDB.list<Paciente>('paciente');
  private doctorDiagnostico=this.afDB.list<Doctor>('doctorDiagnostico');
  /* 
	Añadir aqui las funciones necesarias para base de datos
	afDB.database.ref('CLAVE').set('VALOR');
  */

   // Usar save para crear o modificar un paciente
	 savePatientPetition(pac:Paciente)
	 {		
		 this.afDB.database.ref('paciente/'+pac.nombre).set(pac);
		
   } 
   

   //TODO a revisar el retorno
   loadPatientPetition(){

     return this.pacientePeticion.valueChanges();

   }

	 saveDoctocResponse(doc:Doctor)
	 {		
		 this.afDB.database.ref('doctor/'+doc.nombre).set(doc);
		
   } 
   

   //TODO a revisar el retorno
   loadDoctorResponse(){

     return this.doctorDiagnostico.valueChanges();

   }

}
