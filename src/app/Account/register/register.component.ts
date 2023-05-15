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


  nameRegx = /^[a-zA-Z]+$/;
  emailRegx =
    /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  hide = true;
  constructor(private fb: FormBuilder, private ac: AcountService, private notfication: AlertService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(this.nameRegx),]],
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
          Validators.pattern('[0-9]*')
        ],
      ],
      userPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)],],
      // userAdrees: ['', Validators.required],
      address: this.fb.array([this.fb.group({ as: [''] })

      ]),


    });

  }
  // get nameControl() {
  //   // return this.form.get('userName');
  //   return this.form.controls["userName'"]
  // }

  // onNameChange() {
  //   const value = this.nameControl.value;
  //   const trimmedValue = value.trim();
  //   this.nameControl.setValue(trimmedValue, { emitEvent: false });
  // }
  /*try address*/
  addressForm = this.fb.group({
    as: new FormControl('', [Validators.required]),

  });

  get address() {
    return this.form.controls["address"] as FormArray
  }

  addAS() {
    this.address.push(
      this.fb.group({
        as: ['']
        // as: new FormControl('', [Validators.required]),

      })

    );
  }

  get adreessLength() { return this.address.length }
  removeas(i: number) {
    if (this.address.length > 1) { this.address.removeAt(i) }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value)
    let data = this.form.value
    const truvalue = this.ac.getemail(this.form.value.userEmail)



    if (truvalue >= 0) {
      this.notfication.showNotification("This email id alreday register", "ok", "info");

    }
    else {
      this.ac.savedata(this.form.value)

    }


  }
  onReset(): void {
    console.log('hi i am working');
    this.submitted = false;
    this.form.reset();
  }
}
