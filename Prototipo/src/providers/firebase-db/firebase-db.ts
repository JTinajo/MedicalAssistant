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
  
 /*********
  * 
  * Pacientes
  *
  *****/

   // crea o modifica datos de un paciente
	 savePatient(pac:Paciente)
	 {		    
    let key = this.afDB.database.ref('/paciente/').push(pac).key;	
    pac.idPaciente = key;
    this.updatePatient(pac);
   }
   
   updatePatient(pac:Paciente)
	 {		
    this.afDB.database.ref('/paciente/'+pac.idPaciente).set(pac);	
   }
   

   //Carga listado de pacientes
   loadPatients():Observable<Paciente[]>{
     return this.pacientePeticion.valueChanges();     
   }

   
   // carga paciente con id = idPaciente
   loadPatientsId(idPaciente:string):Observable<Paciente[]>{
    return this.afDB.list<Paciente>('/paciente/'+idPaciente+"/").valueChanges();     
  }


/**
 * 
 * Doctores
 * 
 */


   // crea o modifica los datos de un doctor
	 saveDoctoc(doc:Doctor)
	 {		
     let key = this.afDB.database.ref('/doctor/').push(doc).key;	
    doc.idDoctor = key;
    this.updateDoctor(doc);	
   } 
   updateDoctor(doc:Doctor)
	 {		
    this.afDB.database.ref('/doctor/'+doc.idDoctor).set(doc);	
   }
   

   //Carga listado de doctores
   loadDoctors():Observable<Doctor[]>{
     return this.doctorDiagnostico.valueChanges();
   }


   
   /**
    * 
    * Consultas
    * 
    */


       // crea una consulta de un paciente
	 saveConsult(con:Consulta)
	 {		 
    this.afDB.database.ref('/consulta/'+con.idPaciente).set(con);	
    
   }
    
   // modifica una consulta para añadir los datos del medico
   updateConsulta(idDoc:string, con:Consulta)
	 {		
     con.idDoctor= idDoc;
    this.afDB.database.ref('/consulta/'+con.idPaciente).set(con);	
   }
   

   //Carga listado de pacientes
   loadConsults():Observable<Consulta[]>{
     return this.consultas.valueChanges();     
   }

   
   // carga consultas de un paciente con id = idPaciente
   loadConsultsById(idPaciente:string):Observable<Paciente[]>{
    return this.afDB.list<Paciente>('/consulta/'+idPaciente+"/").valueChanges();     
  }


}
