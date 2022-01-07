import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.color="magenta";
  }
//   @HostListener("click") onClicks(){
//     this.textDeco("magenta")
//   }

//   @HostListener("dblclick") onDoubleClicks(){
//     this.textDeco("None")
//   }
//   private textDeco(action:string){
//     this.elem.nativeElement.style.color=action;
//   }

// }
}