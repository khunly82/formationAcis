import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidators {


  static in(values: any[]): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors|null => {
      const valueToControl = control.value;
      if(valueToControl == null) {
        // pas d'erreur
        return null;
      }
      if(values.includes(valueToControl)) {
        // pas d'erreur
        return null;
      }
      return { in: true }
    }
  }
}
