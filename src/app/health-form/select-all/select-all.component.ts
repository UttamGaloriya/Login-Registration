import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-select-all',
  templateUrl: './select-all.component.html',
  styleUrls: ['./select-all.component.scss']
})
export class SelectAllComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      minValue: ['', [Validators.required]],
      maxValue: ['', [Validators.required]],
    });

    // Subscribe to value changes of minValue control
    this.form.get('minValue')?.valueChanges.subscribe(() => {
      this.form.get('maxValue')?.updateValueAndValidity();
    });

    // Add custom validator to maxValue control
    this.form.get('maxValue')?.setValidators([
      Validators.required,
      this.validateMaxValue.bind(this)
    ]);
  }

  validateMaxValue(control: AbstractControl): ValidationErrors | null {
    const minValue = this.form.get('minValue')?.value;
    const maxValue = control.value;

    if (minValue !== '' && maxValue !== '' && maxValue <= minValue) {
      return { invalidMaxValue: true };
    }

    return null;
  }
}
