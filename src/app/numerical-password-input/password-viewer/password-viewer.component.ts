import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password-viewer',
  template: `<div id="passwordViewer">{{currentNumber}}</div>`,
  styleUrls: ['./password-viewer.component.css']
})
export class PasswordViewerComponent {
  @Input('userInputs') currentNumber: string;
}
