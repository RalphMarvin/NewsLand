import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogCategoriesPage } from './blog-categories';

@NgModule({
  declarations: [
    BlogCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogCategoriesPage),
  ],
})
export class BlogCategoriesPageModule {}
