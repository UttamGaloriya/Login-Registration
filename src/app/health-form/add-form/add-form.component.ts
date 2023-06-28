import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  measurementsDataList: string[] = ['one', 'two', 'three', 'foure']
  compersionList: string[] = ['equal', 'less', 'gretter', 'noteqval']
  assessmentToggle: object = { index: 0, sub_index: 0 }
  categoryIndex: number = 0
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
  unite(index: number, sub_index: number) {
    const unite = this.user.value.patient[index].category[sub_index].type
    if (1) {
      return this.uniteList[unite]
    } else {
      return 1
    }
  }
  measurementsList(index: number, sub_index: number) {
    const toggle = this.user.value.patient[index].category[sub_index].compersion

    console.log(toggle)
    if (toggle === true) {
      // this.user.get('patient')?.at[index].get('categoryName')?.disable()
      // this.getPatient.at(index).get('categoryName')?.disable()
      // this.getPatient.at(index).get('category')?.at(index)
      // this.getAssessment(index).at(index).get('referenceRegion')?.disable()
      return this.measurementsDataList
    } else {

      return this.measurementsDataList.slice(0, 2)
    }
  }
  compersion(index: number, sub_index: number) {
    const toggle = this.user.value.patient[index].category[sub_index].compersion
    this.getAssessment(index).at(sub_index).get('referenceRegion')?.disable()
    if (toggle == true) {
      this.getAssessment(index).at(sub_index).get('referenceRegion')?.enable()
      return true
    } else {
      return false
    }
  }

  showAssement(index: number, sub_index: number) {
    this.assessmentToggle = { index: index, sub_index: sub_index }
    this.showAssemntResult(index, sub_index)
  }
  showAssemntResult(index: number, sub_index: number) {
    const data: any = this.assessmentToggle
    if (data.index == index && data.sub_index == sub_index) { return true }
    else { return false; }
  }
  categoryShow(index: number) {
    if (index != this.categoryIndex) {
      this.categoryIndex = index;
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
    this.categoryShow(this.categoryIndex + 1)
    this.showAssement(this.categoryIndex, 0)
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
        compersion: ['',],
        measurements: ['', [Validators.required]],
        measuringRegion: ['', [Validators.required]],
        referenceRegion: ['', [Validators.required]],
        goals: this.fb.group({
          goal1: [''],
          goal2: [''],
          goal3: [''],
          goal4: ['']
        }),
        routine: ['', [Validators.required]],
        times: ['', [Validators.required]]
      })
    return assement
  }
  getAssessment(index: number) {
    return this.getPatient.at(index).get('category') as FormArray
  }
  addAssesment(index: number, sub_index: number) {
    this.getAssessment(index).push(this.assessment())
    this.showAssement(index, (sub_index + 1))
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
    let user = this.user.value
    if (user.assement) {
      console.log("yes working")
    }
  }

}
