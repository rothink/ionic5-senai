import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appTextBlue]",
})
export class TextBlueDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "blue";
  }
}
