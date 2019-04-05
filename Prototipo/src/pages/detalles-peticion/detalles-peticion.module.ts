import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesPeticionPage } from './detalles-peticion';

@NgModule({
  declarations: [
    DetallesPeticionPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesPeticionPage),
  ],
})
export class DetallesPeticionPageModule {}
