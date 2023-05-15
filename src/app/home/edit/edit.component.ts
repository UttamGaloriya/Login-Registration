import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcountService } from 'src/app/services/acount.service';
import { userobj } from 'src/app/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  savedata?: any;
  hide = false;
  dataAdress: any
  num: any
  heroId?: any;


  nameRegx = /^[a-zA-Z]+$/;
  emailRegx =
    /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  routeSub: any;

  constructor(private fb: FormBuilder, private ac: AcountService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((res) => {
      this.heroId = res['id'];
    });

  }

  ngOnInit(): void {
    this.savedata = this.ac.getdata(this.heroId)
    console.log(this.savedata);

    this.form = this.fb.group({
      userName: [this.savedata.userName, [Validators.required, Validators.pattern(this.nameRegx)]],
      userEmail: [
        this.savedata.userEmail,
        [Validators.required, Validators.pattern(this.emailRegx)],
      ],
      userType: [this.savedata.userType, Validators.required],
      userNumber: [
        this.savedata.userNumber,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*')
        ],
      ],
      userPassword: [
        this.savedata.userPassword,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)

        ],
      ],
      // userAdrees: [this.savedata.userAdrees, Validators.required],
      address: this.fb.array([]),

    });
    for (let index = 0; index < this.savedata.address.length; index++) {

      this.addAdreess_M(this.savedata.address[index].as);

    }

  }

  get adreessLength() { return this.address.length }

  get address() {
    return this.form.controls["address"] as FormArray
    // return this.savedata.address
  }


  addAdreess() {
    this.address.push(this.fb.group({
      as: new FormControl('', [Validators.required]),

    }));
  }

  addAdreess_M(data: any) {
    this.address.push(this.fb.group({
      as: new FormControl(data, [Validators.required]),

    }));
  }


  removeas(i: number) {
    if (this.address.length > 1) { this.address.removeAt(i) }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



  onSubmit() {

    console.log(this.form.value)
    this.ac.update(this.form.value, this.heroId);

  }

}
