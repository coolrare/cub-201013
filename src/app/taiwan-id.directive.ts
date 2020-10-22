import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { TaiwanIdValidator } from './login2/TaiwanIdValidator';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[taiwanId][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TaiwanIdDirective, multi: true }
  ]
})

export class TaiwanIdDirective implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    return TaiwanIdValidator(c);
  }
}
