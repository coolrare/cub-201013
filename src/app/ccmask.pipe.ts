import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccmask'
})
export class CcmaskPipe implements PipeTransform {

  transform(value: string): string {
    const re = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/;
    return value.replace(re, '$1-****-****-$4');
  }

}
