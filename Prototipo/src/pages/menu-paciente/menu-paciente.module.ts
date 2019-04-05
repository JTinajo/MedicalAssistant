import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPacientePage } from './menu-paciente';

@NgModule({
  declarations: [
    MenuPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPacientePage),
  ],
})
export class MenuPacientePageModule {}
