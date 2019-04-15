//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Paciente, Doctor, Consulta } from '../../app/app.module';
import { Observable } from 'rxjs';




/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  private pacientePeticion=this.afDB.list<Paciente>('/paciente/');
  private doctorDiagnostico=this.afDB.list<Doctor>('/doctorDiagnostico/');


    
  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
    
    
  }
  
 

   // Usar save para crear o modificar un paciente
	 savePatientPetition(pac:Paciente,pet:Consulta)
	 {		
     this.afDB.database.ref('paciente/'+pac.nombre).set(pac);
     
     
		
   } 
   

   //TODO a revisar el retorno
   loadPatientPetition():Observable<Paciente[]>{
     return this.pacientePeticion.valueChanges();    
  

   }

	 saveDoctocResponse(doc:Doctor)
	 {		
		 this.afDB.database.ref('doctor/'+doc.nombre).set(doc);
		
   } 
   

   //TODO a revisar el retorno
   loadDoctorResponse():Observable<Doctor[]>{

     return this.doctorDiagnostico.valueChanges();

   }

   

}
