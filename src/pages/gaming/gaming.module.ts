import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamingPage } from './gaming';

@NgModule({
  declarations: [
    GamingPage,
  ],
  imports: [
    IonicPageModule.forChild(GamingPage),
  ],
})
export class GamingPageModule {}
