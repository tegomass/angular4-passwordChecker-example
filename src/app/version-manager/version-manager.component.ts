import {Component} from '@angular/core';

@Component({
  selector: 'app-version-manager',
  template: `
    <app-version-manager-display [minor]="versionMinor" [major]="versionMajor"></app-version-manager-display>
    <app-version-manager-buttons (newMinor)="onNewMinor($event)" (newMajor)="onNewMajor($event)"></app-version-manager-buttons>`
})
export class VersionManagerComponent {

  versionMinor: number;
  versionMajor: number;

  onNewMinor(): void {
    this.versionMinor++;
  }

  onNewMajor(): void {
    this.versionMajor++;
    this.versionMinor = 0;
  }

  constructor() {
    this.versionMajor = 1;
    this.versionMinor = 0;
  }
}
