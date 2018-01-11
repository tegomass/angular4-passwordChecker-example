import { Component } from '@angular/core';

import { CalculatorService } from "./calculator.service";

@Component({
  selector: 'app-calculator-keyboard',
  template: '<div>works !</div><button (click)="sendResult()">send result</button>'
})
export class CalculatorKeyboardComponent {
  // send the result
  constructor(private calculatorService: CalculatorService) {}

  sendResult(): void {
    // send message to subscribers via observable subject
    this.calculatorService.sendResult('Message from Home Component to App Component!');
  }

  clearResult(): void {
    // clear message
    this.calculatorService.clearResult();
  }
}
