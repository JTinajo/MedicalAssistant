import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesPacientePage } from './detalles-paciente';

@NgModule({
  declarations: [
    DetallesPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesPacientePage),
  ],
})
export class DetallesPacientePageModule {}
