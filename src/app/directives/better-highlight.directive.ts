import { Directive, ElementRef, HostListener, HostBinding, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor: string = 'transparent';
  @Input() hightlightColor: string = 'red';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {};

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    this.backgroundColor = this.hightlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    this.backgroundColor = this.defaultColor;;
  }
}
