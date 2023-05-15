import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcountService } from 'src/app/services/acount.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form!: FormGroup;
  constructor(private fb: FormBuilder, private ac: AcountService, private notfication: AlertService) {

  }
  emailRegx =
    /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  ngOnInit(): void {
    this.form = this.fb.group({
      userEmail: [
        '',
        [Validators.required, Validators.pattern(this.emailRegx)]],
      userPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit() {
    this.ac.login(this.form.value.userEmail, this.form.value.userPassword)
  }
}
