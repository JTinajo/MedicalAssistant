import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider, Item} from '../../providers/firebase-db/firebase-db';
import { Observable } from 'rxjs-compat';

@IonicPage()
@Component({
	selector: 'page-nuevo-contacto',
	templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

	public todo = new Item();

	constructor(public navCtrl: NavController, public navParams: NavParams,
	 public dbFirebase: FirebaseDbProvider ) {

	}

	ionViewDidLoad() {

	}

	logForm() {

		this.todo.id = Math.random().toString(36).substr(2, 5);
		this.dbFirebase.addContacto(this.todo);
		this.navCtrl.pop();
	}

}
