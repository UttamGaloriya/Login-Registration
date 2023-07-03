import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static required(control: FormControl): { [key: string]: boolean } | null {
    if (control.value === null || control.value === undefined || control.value === '') {
      return { 'required': true };
    }
    return null;
  }

  static noWhitespace(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim().length === 0) {
      return { 'noWhitespace': true };
    }
    return null;
  }

  static numbersOnly(control: FormControl): { [key: string]: boolean } | null {
    const pattern = /^[0-9]+$/;
    if (control.value && !pattern.test(control.value)) {
      return { 'numbersOnly': true };
    }
    return null;
  }

  static rangeValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const rangeMin = control.get('rangeMin')?.value;
      const rangeMax = control.get('rangeMax')?.value;
      if (rangeMin !== '' && rangeMax !== '' && rangeMin >= rangeMax) {
        return { invalidRange: true };
      }
      return null;
    };
  }

  //min -max validation

  static min_maxValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const rangeMin = control.get('range')?.get('rangeMin')?.value;
      const rangeMax = control.get('range')?.get('rangeMax')?.value;
      const simplevalue = control.get('goals')?.get('simple')?.get('value')?.value;
      const errorvalue = control.get('goals')?.get('simple')?.get('value')?.value;
      const difference = control.get('goals')?.get('simple')?.get('value')?.value;
      const comparsion = control.get('goals')?.get('simple')?.get('value')?.value;

      switch (rangeMin < rangeMax) {
        case (simplevalue > rangeMax || rangeMin > simplevalue):
          return { invadMin_Max: true }
          break;
        // case (errorvalue > rangeMax || rangeMin > errorvalue):
        //   return { invadMin_Max: true }
        //   break;
        // case (difference > rangeMax || rangeMin > difference):
        //   return { invadMin_Max: true }
        //   break;
        // case (comparsion > rangeMax || rangeMin > comparsion):
        //   return { invadMin_Max: true }
        //   break;
        default:
          return null
          break;
      }
    }
  }

}
