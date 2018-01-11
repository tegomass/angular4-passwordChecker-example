import { Routes } from '@angular/router';
import { NumericalPasswordInputComponent } from "./numerical-password-input/numerical-password-input.component";
import { VersionManagerComponent } from "./version-manager/version-manager.component";
import { CalculatorDisplayComponent } from "./not-parent-child-calculator/calculator-display.component";

export const appRoutes: Routes = [
  {path: '', component: NumericalPasswordInputComponent},
  {path: 'password', component: NumericalPasswordInputComponent},
  {path: 'version-manager', component: VersionManagerComponent},
  {path: 'calculator', component: CalculatorDisplayComponent},
];
