import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen:boolean = false;
  menuIsOpen = this.isOpen;

  constructor(
    private renderer: Renderer2, 
    private elRef: ElementRef
    ) { }

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  //   const menu = this.elRef.nativeElement.children[1];

  //   if (this.isOpen) {
  //     this.renderer.addClass(menu, 'show');
  //   } else {
  //     this.renderer.removeClass(menu, 'show');
  //   }
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const menu = this.elRef.nativeElement.children[1];

    if (this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
      const menu = this.elRef.nativeElement.children[1];

      if (this.isOpen) {
        this.renderer.addClass(menu, 'show');
      } else {
        this.renderer.removeClass(menu, 'show');
      }

    } else {
      this.isOpen = false;
      this.renderer.removeClass(menu, 'show');
    }
  }
}
