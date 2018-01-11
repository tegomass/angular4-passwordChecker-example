import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CalculatorService {
  // service

  private subject = new Subject<any>();

  sendResult(message: string) {
    this.subject.next(message);
  }

  clearResult() {
    this.subject.next();
  }

  getResult(): Observable<any> {
    return this.subject.asObservable();
  }
}
