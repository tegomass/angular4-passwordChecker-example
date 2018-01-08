import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  template: `
    <div id="message">{{message}}</div>
    <app-password-viewer [userInputs]="userInputs"></app-password-viewer>
    <app-randomized-numeric-input (notify)="onInput($event)"></app-randomized-numeric-input>`,
  styleUrls: ['./numerical-password-input.component.css']
})
export class NumericalPasswordInputComponent implements OnInit {
  userPassword = '123456789';
  userInput: string;
  userInputs: string;
  message: string;

  onInput(title: string): void {
    this.userInput = title;
    this.userInputs += this.userInput;
    if (this.userInputs.length === 9) {
      const isPasswordMatch = this.checkPassword();
      if (isPasswordMatch) {
        this.onPasswordMatch();
      } else {
        this.showMessage('ERROR !');
        this.resetInputs();
      }
    }
  }

  onPasswordMatch(): void {
    this.showMessage('MATCH !');
    //next
  }

  resetInputs(): void {
    this.userInputs = '';
  }

  showMessage(text): void {
    this.message = text;
  }

  checkPassword(): boolean {
    return this.userInputs === this.userPassword;
  }

  ngOnInit() {
    this.userInputs = '';
  }
}
