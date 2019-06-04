import { Component } from '@angular/core';

/**
 * Generated class for the CustomWeatherModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-weather-modal',
  templateUrl: 'custom-weather-modal.html'
})
export class CustomWeatherModalComponent {

  text: string;

  constructor() {
    console.log('Hello CustomWeatherModalComponent Component');
    this.text = 'Hello World';
  }

}
