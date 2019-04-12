import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContestarPeticionPage } from './contestar-peticion';

@NgModule({
  declarations: [
    ContestarPeticionPage,
  ],
  imports: [
    IonicPageModule.forChild(ContestarPeticionPage),
  ],
})
export class ContestarPeticionPageModule {}
