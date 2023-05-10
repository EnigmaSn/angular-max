import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  constructor(private router: Router) {};
  onLoadServers(id: number) {
    this.router.navigate(
      ['servers', id, 'edit'], 
      {
        queryParams: {
          param1: 'value1'
        }, 
        fragment: 'loading'
      }
    );
  };
}