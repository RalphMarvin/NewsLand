import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomizePage } from './customize';

@NgModule({
  declarations: [
    CustomizePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomizePage),
  ],
})
export class CustomizePageModule {}
