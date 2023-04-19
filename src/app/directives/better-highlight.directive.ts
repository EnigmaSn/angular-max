import { Directive, ElementRef, HostListener, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {};

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = 'green';
  }
  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
