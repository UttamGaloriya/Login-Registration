import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectData } from '../selectData';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  user!: FormGroup
  bodyRegionList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  // typeList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  typeList: any = Object.keys(selectData)
  uniteList: any = selectData
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      assement: ['', [Validators.required]],
      bodyRegion: ['', [Validators.required]],
      description: ['', [Validators.required]],
      patientTime: this.fb.array([this.PatientTime()]),
      patient: this.fb.array([this.Patient()])
    })
  }
  //patient
  Patient() {
    return this.fb.group(
      {
        categoryName: [''],
        category: this.fb.array([this.assessment()])
      }
    )
  }

  get getPatient() {
    return this.user.controls['patient'] as FormArray
  }

  addPatient() {
    this.getPatient.push(this.Patient())
  }

  removePatient(i: number) {
    this.getPatient.removeAt(i)
  }
  get lengthPatient() {
    return this.getPatient.length
  }
  //assessment
  assessment() {
    let assement = this.fb.group(
      {
        assessmentName: [''],
        type: [''],//select
        unite: [''],//select
        range: [''],//two number
      })
    return assement
  }
  getAssessment(index: number) {
    return this.getPatient.at(index).get('category') as FormArray
  }
  addAssesment(index: number) {
    this.getAssessment(index).push(this.assessment())
  }
  removeAssesment(index: number, i: number) {
    this.getAssessment(index).removeAt(i)
  }

  //select unite function
  unite(p_index: number) {
    const unite = this.user.value.patient[p_index].category[0].type
    if (unite != null) {
      return this.uniteList[unite]
    } else {
      return 1
    }
  }
  //patient time
  PatientTime() {
    return this.fb.group(
      { scheduleName: ['', [Validators.required]], scheduleTime: ['', [Validators.required]] }
    )
  }
  get getPatientTime() {
    return this.user.controls['patientTime'] as FormArray
  }

  addPatientTime() {
    this.getPatientTime.push(this.PatientTime())
  }

  removePatientTime(i: number) {
    this.getPatientTime.removeAt(i)
  }
  get lengthPatientTime() {
    return this.getPatientTime.length
  }
  //submit button
  submit() {
    if (this.user.valid) {
      console.log('submit')
      console.log(this.user.value)
    }
    else {
      alert("Please fill all the fields")
    }
  }
}
