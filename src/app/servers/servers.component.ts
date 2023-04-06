import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent {
  serverName = '';

  isServerName() { 
    return this.serverName ? this.serverName : false;
  }

  resetServerName() {
    return this.serverName = '';
  }
}
