//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

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
  
  private clientesRef=this.afDB.list<Cliente>('clientes');
	 getClientes()
	 {
		//return this.clientesRef.valueChanges();
		 this.afDB.database.ref('javi').set('ta tonto');
		console.log("llamando");
	 } 
  

}
