import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @Output() selectedLink = new EventEmitter<string>();

  onSelect(selectedItem: string) {
    this.selectedLink.emit(selectedItem);
  }
}
