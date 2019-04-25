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
  private consultas =  this.afDB.list<Consulta>('/consulta/');


    
  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
    
    
  }
  
 /*********
  * 
  * Pacientes
  *
  *****/

   // crea  un paciente
	 savePatient(pac:Paciente)
	 {		    
    let key = this.afDB.database.ref('/paciente/').push(pac).key;	
    pac.idPaciente = key;
    this.updatePatient(pac);
   }
   
   // modifica datos de un paciente
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


   // crea un doctor
	 saveDoctoc(doc:Doctor)
	 {		
     let key = this.afDB.database.ref('/doctor/').push(doc).key;	
    doc.idDoctor = key;
    this.updateDoctor(doc);	
   } 
   // modifica los datos de un doctor
   updateDoctor(doc:Doctor)
	 {		
    this.afDB.database.ref('/doctor/'+doc.idDoctor).set(doc);	
   }
   

   //Carga listado de doctores
   loadDoctors():Observable<Doctor[]>{
     return this.doctorDiagnostico.valueChanges();
   }

  loadDoctorsId(idDoctor: string): Observable<Doctor[]> {
    return this.afDB.list<Doctor>('/doctor/' + idDoctor + "/").valueChanges();
  }

   
   /**
    * 
    * Consultas
    * 
    */


    // crea una consulta de un paciente
	 saveConsult(con:Consulta)
	 {		 
    let key =this.afDB.database.ref('/consulta/'+con.idPaciente+"/").push(con).key;	
     
    con.idConsulta = key;
    this.afDB.database.ref('/consulta/'+con.idPaciente+"/"+con.idConsulta+"/").set(con);
    
   }
    
   // modifica una consulta para añadir los datos del medico y los añade al historial del paciente
   // pasara a estar respondida
   updateConsulta(con:Consulta)
	 {		    
    this.afDB.database.ref('/consulta/'+con.idPaciente+"/"+con.idConsulta).remove();
    this.afDB.database.ref('/historial/'+con.idPaciente+"/"+con.idConsulta+"/").set(con);	

   }
   

   //Carga listado de consultas sin responder
   loadConsults():Observable<Consulta[]>{
     return this.consultas.valueChanges();     
   }


   // carga las consultas de un paciente sin responder 
  loadConsultsByIdPaciente(idPaciente: string):Observable<Consulta[]> {
    console.log("BUSCANDO EN = " + '/consulta/' + idPaciente +  "/");
    return this.afDB.list<Consulta>('/consulta/' + idPaciente + "/" ).valueChanges();

  }

  // carga las consultas de un paciente respondidas
  loadRespondByIdPaciente(idPaciente: string):Observable<Consulta[]> {
    console.log("BUSCANDO EN = " + '/historial/' + idPaciente +  "/");
    return this.afDB.list<Consulta>('/historial/' + idPaciente + "/" ).valueChanges();

  }

  loadResponds():Observable<Consulta[]> {
    console.log("BUSCANDO EN = " + '/historial/' );
    return this.afDB.list<Consulta>('/historial/').valueChanges();

  }


}
