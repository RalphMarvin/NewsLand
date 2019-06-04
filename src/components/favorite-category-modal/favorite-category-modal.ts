import { Component } from '@angular/core';

/**
 * Generated class for the FavoriteCategoryModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'favorite-category-modal',
  templateUrl: 'favorite-category-modal.html'
})
export class FavoriteCategoryModalComponent {

  text: string;

  constructor() {
    console.log('Hello FavoriteCategoryModalComponent Component');
    this.text = 'Hello World';
  }

}
