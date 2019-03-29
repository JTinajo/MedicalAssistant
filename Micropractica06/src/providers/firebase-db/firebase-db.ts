import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

export class Item {

	id: string;
 	nombre: string;
 	organizacion: string;
 	numero: string;
 	correo: string;
 }

/*
	Generated class for the FirebaseDbProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

	private contactosRef;

	constructor(public afDB: AngularFireDatabase) {

		this.contactosRef = this.afDB.list<Item>('contactos');
		console.log(this.contactosRef);
	}

	addContacto(item: Item) {

		return this.afDB.database.ref('contactos/'+item.id).set(item);
	}

	getContactos() {

		return this.contactosRef.valueChanges();
	}

	deleteContact(item: Item) {

		this.afDB.database.ref('contactos/'+item.id).remove()
	}
}

