import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "textToUpper",
})
export class TextToUpperPipe implements PipeTransform {
  transform(value: string): unknown {
    return value.toLocaleUpperCase();
  }
}
