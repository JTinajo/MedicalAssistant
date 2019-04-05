import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDoctorPage } from './menu-doctor';

@NgModule({
  declarations: [
    MenuDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuDoctorPage),
  ],
})
export class MenuDoctorPageModule {}
