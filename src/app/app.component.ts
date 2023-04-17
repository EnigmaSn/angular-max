import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  activeLink: string = 'recipe';

  onNavigate(activatedLink: string) {
    this.activeLink = activatedLink;
  }
}
