import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToLower'
})
export class TextToLowerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
