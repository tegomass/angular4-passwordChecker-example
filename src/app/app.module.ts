import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NumericalPasswordInputComponent } from './numerical-password-input/numerical-password-input.component';
import { PasswordViewerComponent } from './numerical-password-input/password-viewer/password-viewer.component';
import { RandomizedNumericInputComponent } from './numerical-password-input/randomized-numeric-input/randomized-numeric-input.component';
import { VersionManagerComponent } from './version-manager/version-manager.component';
import { VersionManagerDisplayComponent } from './version-manager/version-manager-display/version-manager-display.component';
import { VersionManagerButtonsComponent } from './version-manager/version-manager-buttons/version-manager-buttons.component';
import { CalculatorKeyboardComponent } from './not-parent-child-calculator/calculator-keyboard.component';
import { CalculatorDisplayComponent } from './not-parent-child-calculator/calculator-display.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericalPasswordInputComponent,
    PasswordViewerComponent,
    RandomizedNumericInputComponent,
    VersionManagerComponent,
    VersionManagerDisplayComponent,
    VersionManagerButtonsComponent,
    CalculatorKeyboardComponent,
    CalculatorDisplayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{enableTracing: true} // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
