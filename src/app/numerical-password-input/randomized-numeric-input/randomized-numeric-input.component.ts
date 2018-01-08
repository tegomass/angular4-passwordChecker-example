import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.css']
})
export class RandomizedNumericInputComponent implements OnInit {
  digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '', ''];
  currentNumber: string;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  onCurrentNumberChange(event): void {
    const target = event.target || event.srcElement || event.currentTarget;
    this.currentNumber = target.attributes['data-number'].value;
    this.notify.emit(this.currentNumber);
  }

  shuffleArray(array): Array<any> {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  ngOnInit() {
    this.shuffleArray(this.digits);
  }
}
