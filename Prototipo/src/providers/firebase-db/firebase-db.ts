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
  private doctorDiagnostico=this.afDB.list<Doctor>('/doctor/');
  private consultas =  this.afDB.list<Consulta>('/consultas/');


    
  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
    
    
  }
  
 

   // crea o modifica datos de un paciente
	 savePatient(pac:Paciente)
	 {		
        this.afDB.database.ref('paciente/'+pac.nombre).set(pac);	
   } 
   

   //Carga listado de pacientes
   loadPatients():Observable<Paciente[]>{
     return this.pacientePeticion.valueChanges();     
   }

   
   // carga paciente con id = idPaciente
   loadPatientsId(idPaciente:number):Observable<Paciente[]>{
    return this.afDB.list<Paciente>('/paciente/'+idPaciente+"/").valueChanges();     
  }


   // crea o modifica los datos de un doctor
	 saveDoctocResponse(doc:Doctor)
	 {		
		 this.afDB.database.ref('doctor/'+doc.nombre).set(doc);		
   } 
   

   //Carga listado de doctores
   loadDoctors():Observable<Doctor[]>{
     return this.doctorDiagnostico.valueChanges();
   }


   // TODO CONSULTAS
   

}
