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
  routineList: string[] = ['day', 'sun', 'mon', 'tue', 'wed', 'fri', 'thu', 'sat']
  typeList: any = Object.keys(selectData)
  uniteList: any = selectData
  measurementsList: string[] = ['one', 'two', 'three', 'foure']
  compersionList: string[] = ['equal', 'less', 'gretter', 'noteqval']
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    alert("hi")
    this.user = this.fb.group({
      assement: ['', [Validators.required]],
      bodyRegion: ['', [Validators.required]],
      description: ['', [Validators.required]],
      patientTime: this.fb.array([this.PatientTime()]),
      patient: this.fb.array([this.Patient()])
    })

  }
  unite(index: number, sub_index: number) {
    const unite = this.user.value.patient[index].category[sub_index].type
    if (1) {
      return this.uniteList[unite]
    } else {
      return 1
    }
  }

  time() {
    return this.user.value.patientTime
  }
  //patient
  Patient() {
    return this.fb.group(
      {
        categoryName: ['', [Validators.required]],
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
        assessmentName: ['', [Validators.required]],
        type: ['', [Validators.required]],//select
        unite: ['', [Validators.required]],//select
        rangeMin: ['', [Validators.required]],//two number
        rangeMax: ['', [Validators.required]],//two number
        compersion: ['false'],
        measurements: [''],
        goals: this.fb.group({
          goal1: [''],
          goal2: [''],
          goal3: [''],
          goal4: ['']
        }),
        routine: [''],
        times: ['']
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
  lengthAssessment(index: number) {
    return this.getAssessment(index).length
  }
  //select unite function

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
      // alert("Please fill all the fields")
    }

  }

}
