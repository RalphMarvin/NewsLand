import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { FavoriteCategoryModalComponent } from './favorite-category-modal/favorite-category-modal';
import { CustomWeatherModalComponent } from './custom-weather-modal/custom-weather-modal';

@NgModule({
	declarations: [
		FavoriteCategoryModalComponent,
    	CustomWeatherModalComponent
	],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [
		FavoriteCategoryModalComponent,
    	CustomWeatherModalComponent
	],
	entryComponents: [
		FavoriteCategoryModalComponent,
		CustomWeatherModalComponent
	]
})
export class ComponentsModule {}
