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

  validateMinMax() {
    return (formGroup: FormGroup): { [key: string]: boolean } | null => {
      const minValue = formGroup?.get('rangeMin')?.value;
      const maxValue = formGroup?.get('rangeMax')?.value;
      console.log(minValue + 'min value' + maxValue + 'max value')
      if (maxValue && minValue && maxValue <= minValue) {
        return { invalidMinMax: true };
      }
      return null;
    };
  }

}
