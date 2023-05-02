import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activetoInactiveCounter: number = 0;
  inactivetoActiveCounter: number = 0;

  constructor() { }

  onSetToActive() {
    this.inactivetoActiveCounter++;
    console.log('inactivetoActiveCounter: ', this.inactivetoActiveCounter);
  }
  onSetToInactive() {
    this.activetoInactiveCounter++;
    console.log('activetoInactiveCounter: ', this.activetoInactiveCounter);
  }
}
