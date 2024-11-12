import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[color]',
  standalone: true,
})
export class ColorDirective {

  @Input('color') colorInput:string | undefined;
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") enter(){
    this.el.nativeElement.style=`color:${this.colorInput? this.colorInput:'red'}`;
  }

  @HostListener("mouseleave") leave(){
    this.el.nativeElement.style="color:black";
  }
}
