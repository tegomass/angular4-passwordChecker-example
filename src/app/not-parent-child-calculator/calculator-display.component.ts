import { Component, OnDestroy } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-calculator-display',
  template: `
    <div>{{result}}</div>
    <app-calculator-keyboard></app-calculator-keyboard>`,
  providers: [ CalculatorService ]
})
export class CalculatorDisplayComponent implements OnDestroy {
  // get the result
  result: any;
  subscription: Subscription;

  constructor(private calculatorService: CalculatorService) {
    // subscribe to home component messages
    this.subscription = this.calculatorService.getResult().subscribe(message => {
      this.result = message;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

