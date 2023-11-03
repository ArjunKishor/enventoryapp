import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[eaHover]'
})
export class HoverDirective implements OnInit{
@Input() eaHover: string = 'red';
  constructor(private element: ElementRef,@Inject(DOCUMENT) private document: Document, private render: Renderer2) {
    console.log(element);
   }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.eaHover;
    this.document.body.style.backgroundColor = 'blue';
    this.render.setStyle(this.element.nativeElement,'backgroundColor',this.eaHover);
  }
@HostListener('mouseenter') onMouseEnter(){
  this.render.setStyle(this.element.nativeElement,'backgroundColor',this.eaHover);
}@HostListener('mouseleave') onMouseleave(){
  this.render.setStyle(this.element.nativeElement,'backgroundColor','white');
}}
