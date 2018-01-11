import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorKeyboardComponent } from "./calculator-keyboard.component";
import { CalculatorDisplayComponent } from "./calculator-display.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalculatorKeyboardComponent,
    CalculatorDisplayComponent
  ]
})
export class CalculatorModule {
}
