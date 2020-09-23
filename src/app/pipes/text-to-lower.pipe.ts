import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "textToLower",
})
export class TextToLowerPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLocaleLowerCase();
  }
}
