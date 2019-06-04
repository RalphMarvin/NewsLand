import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogCustomizePage } from './blog-customize';

@NgModule({
  declarations: [
    BlogCustomizePage,
  ],
  imports: [
    IonicPageModule.forChild(BlogCustomizePage),
  ],
})
export class BlogCustomizePageModule {}
