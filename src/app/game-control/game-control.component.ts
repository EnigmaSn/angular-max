import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.less']
})
export class GameControlComponent {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  constructor() {
    
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  onPauseGame() {
     clearInterval(this.interval);
  }
}
// When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())