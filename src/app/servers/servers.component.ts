import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent {
  serverName = '';
  textVisible = false;
  clicks = [];

  isServerName() { 
    return this.serverName ? this.serverName : false;
  }

  resetServerName() {
    return this.serverName = '';
  }

  onShow() {
    this.clicks.push(new Date().getTime());
    return this.textVisible = !this.textVisible;
  }
}
