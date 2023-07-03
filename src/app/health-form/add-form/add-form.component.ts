import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { selectData } from '../selectData';
import { ValidationService } from '../services/validation.service';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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
  uniteList: any = selectData;
  measurementsDataList: string[] = ['simple', 'error', 'difference', 'comparsion']
  compersionList: string[] = ['equal', 'less', 'gretter', 'noteqval']
  assessmentToggle: object = { index: 0, sub_index: 0 }
  categoryIndex: number = 0
  defaultSelect: string[] = ['simple']
  simple = 'hi'
  simpleErrorString: string = ''
  constructor(private fb: FormBuilder, private valid: ValidationService) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      assement: ['', [Validators.required, ValidationService.noWhitespace]],
      bodyRegion: ['', [Validators.required]],
      description: ['', [Validators.required, ValidationService.noWhitespace]],
      patientTime: this.fb.array([this.PatientTime()]),
      patient: this.fb.array([this.Patient()])
    },)

  }
  rangeValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const rangeMin = control.get('rangeMin')?.value;
      const rangeMax = control.get('rangeMax')?.value;
      if (rangeMin !== '' && rangeMax !== '' && rangeMin >= rangeMax) {
        console.log('work')
        debugger;
        return { invalidRange: true };
      }
      return null;
    };
  }



  Patient() {
    return this.fb.group(
      {
        categoryName: ['', [Validators.required, ValidationService.noWhitespace]],
        category: this.fb.array([this.assessment()])
      })
  }

  assessment() {
    let assement = this.fb.group(
      {
        assessmentName: ['', [Validators.required, ValidationService.noWhitespace]],
        type: ['', [Validators.required]],//select
        unite: ['', [Validators.required]],//select
        range: this.fb.group({
          rangeMin: ['', [Validators.required, ValidationService.numbersOnly]],//two number
          rangeMax: ['', [Validators.required, ValidationService.numbersOnly]],//two number
        }, { validators: ValidationService.rangeValidation() }),
        compersion: [''],
        measurements: [this.defaultSelect, [Validators.required]],
        measuringRegion: ['', [Validators.required]],
        referenceRegion: ['', [Validators.required]],
        goals: this.fb.group(
          {
            simple: this.fb.group({ key: ['', [Validators.required]], value: ['', [Validators.required, ValidationService.numbersOnly]], }),
            error: this.fb.group({ key: [{ value: '', disabled: true }, [Validators.required]], value: [{ value: '', disabled: true }, [Validators.required, ValidationService.numbersOnly, Validators.max(100), Validators.min(0)]] }),
            difference: this.fb.group({ key: [{ value: '', disabled: true }, [Validators.required]], value: [{ value: '', disabled: true }, [Validators.required, ValidationService.numbersOnly, Validators.max(100), Validators.min(0)]], }),
            comparsion: this.fb.group({ key: [{ value: '', disabled: true }, [Validators.required]], value: [{ value: '', disabled: true }, [Validators.required, ValidationService.numbersOnly, Validators.max(999), Validators.min(10)]], }),
          }
        ),
        routine: ['', [Validators.required]],
        times: ['', [Validators.required]]
      }, { validators: ValidationService.min_maxValidation() },
    )
    return assement
  }

  formControl(name: string): FormControl {
    return this.user.get(name) as FormControl;
  }




  //function
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
    if (toggle === true) {
      return this.measurementsDataList
    } else { return this.measurementsDataList.slice(0, 2) }
  }
  compersion(index: number, sub_index: number) {
    const toggle = this.user.value.patient[index].category[sub_index].compersion

    if (toggle == true) {
      this.getAssessment(index).at(sub_index).get('referenceRegion')?.enable()
      // this.mesurementSelect(index, sub_index)
      return true
    } else {
      // this.mesurementSelect(index, sub_index)
      this.getAssessment(index).at(sub_index).get('referenceRegion')?.disable()
      return false
    }
  }

  showAssement(index: number, sub_index: number) {
    this.assessmentToggle = { index: index, sub_index: sub_index }
    this.showAssemntResult(index, sub_index)
  }

  showAssemntResult(index: number, sub_index: number) {
    const data: any = this.assessmentToggle
    let assValid = this.getAssessment(index).at(sub_index).get('assessmentName')?.valid
    let catValid = this.getPatient.at(index).get('categoryName')?.valid
    if (data.index == index && data.sub_index == sub_index && assValid && catValid) {
      this.getAssessment(index).at(sub_index).get('assessmentName')?.enable()
      return true
    }
    else {
      if (catValid) {
        this.getAssessment(index).at(sub_index).get('assessmentName')?.enable()
      } else {
        this.getAssessment(index).at(sub_index).get('assessmentName')?.disable()
      }

      return false;
    }
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

  getAssessment(index: number) {
    return this.getPatient.at(index).get('category') as FormArray
  }
  mygoal(index: number, sub_index: number) {
    let getGoal: string[] = this.user.value.patient[index].category[sub_index].measurements
    return true
  }
  goalsType(x: string, index: number, sub_index: number) {
    let getGoal: string[] = this.user.value.patient[index].category[sub_index].measurements
    const toggle = this.user.value.patient[index].category[sub_index].compersion
    if (!toggle) {

      for (let item of this.measurementsDataList.slice(2, 4)) {
        this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('key')?.disable()
        this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('value')?.disable()
      }
      for (let item of getGoal.slice(0, 2)) {
        if (x === item) { return true }
      }
    } else {
      for (let item of getGoal) {
        if (x === item) { return true }
      }
    }

    return false
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
      { scheduleName: ['', [Validators.required, ValidationService.noWhitespace]], scheduleTime: ['', [Validators.required]] }
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

  //selecetonchange
  mesurementSelect(index: number, sub_index: number) {
    let getGoal: string[] = this.user.value.patient[index].category[sub_index].measurements
    console.log()
    const toggle = this.user.value.patient[index].category[sub_index].compersion
    if (toggle) {

    } else {
      for (let item of this.measurementsDataList.slice(2, 4)) {
        this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('key')?.disable()
        this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('value')?.disable()
      }
      getGoal.slice(0, 2)
      console.log(getGoal)
    }
    for (let item of this.measurementsDataList) {
      this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('key')?.disable()
      this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('value')?.disable()
    }

    for (let item of getGoal) {
      this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('key')?.enable()
      this.getAssessment(index).at(sub_index).get('goals')?.get(item)?.get('value')?.enable()
    }
    console.log(getGoal)

  }

  categoryValid(index: number) {
    let as = this.user.get('assement')?.valid;
    let br = this.user.get('bodyRegion')?.valid;
    let pt = this.user.get('patientTime')?.valid;
    let ds = this.user.get('description')?.valid;
    let asArr = this.getPatient.at(index).get('categoryName')?.valid
    if (as && br && pt && ds) {
      this.getPatient.at(index).get('categoryName')?.enable()
    } else {
      this.getPatient.at(index).get('categoryName')?.disable()
    }
    if (asArr) {
      return true
    }
    return true

  }
  assmentValid(index: number, sub_index: number) {
    let ass = this.getPatient.at(index).get('category')?.valid
    if (ass) {
      return true
    } else {
      return false
    }
  }
  numbersMax(control: FormControl) {
    // const min = this.user.value.patient[0].category[0].rangeMin
    // const max = this.user.value.patient[0].category[0].rangeMax
    if (1) {
      return { invalidMinMax: true }
    }
    return null;
  }
  //submit button
  submit() {
    if (this.user.valid) {
      console.log('submit')
      console.log(this.user.value)
    }
    else {
    }
  }

  maxCheck() {
    let min = this.user.value.patient[0].category[0].range.rangeMin
    let max = this.user.value.patient[0].category[0].range.rangeMax
    this.getAssessment(0).at(0)?.get('range')?.get('rangeMax')?.errors
  }

  maxvalue(index: number, sub_index: number) {
    let min = this.user.value.patient[index].category[sub_index].range.rangeMin
    let max = this.user.value.patient[index].category[sub_index].range.rangeMax
    if (min != '' && max != '' && min >= max) {
      return true
    } else {
      return false
    }
  }

  showSimpleError(goalName: string, index: number, sub_index: number) {
    let min = this.user.value.patient[index].category[sub_index].range.rangeMin
    let max = this.user.value.patient[index].category[sub_index].range.rangeMax
    let simple = this.user.value.patient[index].category[sub_index].goals.simple.value
    if (min > simple && min != '' && max != '') {
      this.simpleErrorString = `enter bigger then ${min}`
      return true
    } else if (max < simple && min != '' && max != '') {
      this.simpleErrorString = `enter smaller then ${max}`
      return true
    } else {
      this.simpleErrorString = ''
      return false
    }
  }

  //chart data

}
