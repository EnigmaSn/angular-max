import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  oddNumbersArr: number[] = [];
  evenNumbersArr: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbersArr.push(firedNumber);
      console.log(this.evenNumbersArr);
    } else {
      this.oddNumbersArr.push(firedNumber);
      console.log(this.oddNumbersArr);
    }
  }
}
