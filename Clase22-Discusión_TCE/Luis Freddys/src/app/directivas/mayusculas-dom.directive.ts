import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMayusculasDom]',
  standalone: true
})
export class MayusculasDomDirective {

  constructor(private eleRef:ElementRef) {
   // console.log('esta llegando a la directiva');
    this.eleRef.nativeElement.style.textTransform='uppercase';
   }

}
