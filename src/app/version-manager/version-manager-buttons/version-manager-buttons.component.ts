import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-version-manager-buttons',
  template: '<button class="update" (click)="addMajor()">new Major</button><button class="update" (click)="addMinor()">new Minor</button>'
})
export class VersionManagerButtonsComponent {

  @Output() newMajor: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() newMinor: EventEmitter<boolean> = new EventEmitter<boolean>();

  addMinor(): void {
    this.newMinor.emit(true);
  }

  addMajor(): void {
    this.newMajor.emit(true);
  }
}
