import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccmask'
})
export class CcmaskPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
