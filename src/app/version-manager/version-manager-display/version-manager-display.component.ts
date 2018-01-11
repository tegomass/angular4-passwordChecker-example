import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-version-manager-display',
  template: `<p>{{major}}.{{minor}}</p>`
})
export class VersionManagerDisplayComponent implements OnChanges {
  @Input() minor: number;
  @Input() major: number;

  ngOnChanges(changes: SimpleChanges) {
    //action on changes
    console.log(changes);
  }
}
