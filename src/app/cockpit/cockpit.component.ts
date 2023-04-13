import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.less']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput', { static: true}) serverContentInput: ElementRef;  

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName : serverNameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName : serverNameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }
}
