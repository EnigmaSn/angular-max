import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  activeCounts: number = 0;
  inactiveCounts: number = 0;

  constructor() {};

  ngOnInit(): void {
    // activeCounts = this.counterService.
  }
}
