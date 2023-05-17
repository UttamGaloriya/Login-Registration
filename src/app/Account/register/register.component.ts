import { Component, OnInit } from '@angular/core';

// import { FormControl } from '@angular/forms';
import {
  FormGroup,

  FormBuilder,
  Validators,

  AbstractControl,
  FormArray,
  FormControl,
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';
import { AcountService } from 'src/app/services/acount.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {



  form!: FormGroup;
  submitted = false;
  savedata: any;


  nameRegx = /^[A-Za-z\s]+$/;
  // Validators.pattern(this.nameRegx)
  emailRegx =
    /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  hide = true;
  constructor(private fb: FormBuilder, private ac: AcountService, private notfication: AlertService) {

  }

  ngOnInit(): void {

    this.form = this.fb.group({
      userName: ['', [Validators.required, this.validateInput, Validators.pattern(this.nameRegx)]],
      userEmail: [
        '',
        [Validators.required, Validators.pattern(this.emailRegx)],
      ],
      userType: ['', Validators.required],
      userNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ],
      ],
      userPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)],],
      address: this.fb.array([this.fb.group({ as: ['', Validators.required] })

      ]),


    });

  }
  //text valdtion
  validateInput(control: FormControl) {
    const trimmedValue = control.value.trim();
    if (trimmedValue === '') {
      return { spacesOnly: true };
    }
    if (!/^[a-zA-Z]+$/.test(trimmedValue)) {
      return { invalidInput: true };
    }
    if (trimmedValue !== control.value) {
      control.setValue(trimmedValue);
    }
    return null;
  }
  //number valdtion
  validateInputNum(control: FormControl) {
    const trimmedValue = control.value.trim();

    if (trimmedValue === '') {
      return { spacesOnly: true };
    }
    if (/[0-9]*/.test(trimmedValue)) {
      return { invalidInput: true };
    }
    if (trimmedValue !== control.value) {
      control.setValue(trimmedValue);
    }
    return null;
  }



  //address from

  addressForm = this.fb.group({ as: new FormControl('', [Validators.required]), });

  get address() { return this.form.controls["address"] as FormArray }

  addAddress() { this.address.push(this.fb.group({ as: ['', Validators.required] })); }

  get adreessLength() { return this.address.length }

  removeas(i: number) { if (this.address.length > 1) { this.address.removeAt(i) } }

  get f(): { [key: string]: AbstractControl } { return this.form.controls; }



  onSubmit() {
    const truvalue = this.ac.getemail(this.form.value.userEmail)
    if (truvalue >= 0) {
      this.notfication.showNotification("This email id alreday register", "ok", "info");
    }
    else {
      this.ac.savedata(this.form.value)
    }
  }

}
