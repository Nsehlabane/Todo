import { Component } from '@angular/core';

/**
 * Generated class for the CompleteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'complete',
  templateUrl: 'complete.html'
})
export class CompleteComponent {

  text: string;

  constructor() {
    console.log('Hello CompleteComponent Component');
    this.text = 'Hello World';
  }

}
