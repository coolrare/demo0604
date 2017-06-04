import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, max_chars: number = 2): any {
    if (value && value.length > max_chars) {
      return value.substr(0, max_chars) + '****';
    }
    return null;
  }

}
