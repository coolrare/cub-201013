import { FormControl } from '@angular/forms';
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator2';

export function TaiwanIdValidator(control: FormControl) {
  if (isNationalIdentificationNumberValid(control.value)) {
    return null;
  } else {
    return {
      TaiwanIdValidator: true
    };
  }
}
