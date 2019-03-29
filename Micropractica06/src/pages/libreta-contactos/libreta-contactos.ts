import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../..//pages/nuevo-contacto/nuevo-contacto';
import {FirebaseDbProvider, Item} from '../../providers/firebase-db/firebase-db';

import { Observable } from 'rxjs-compat';
/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {

  private items: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public dbFirebase: FirebaseDbProvider ) {
  }

  ionViewDidEnter() {

  	this.dbFirebase.getContactos().subscribe(items => this.items = items);
  }

  onLoadContactosPage() {

  	this.navCtrl.push(NuevoContactoPage);
  }
  
  delete(item: Item) {

    this.dbFirebase.deleteContact(item);
    this.dbFirebase.getContactos().subscribe(items => this.items = items);
  }

}
