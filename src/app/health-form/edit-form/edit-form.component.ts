import { Component, OnInit } from '@angular/core';
import { RxjsLearnService } from '../services/rxjs-learn.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  numberArr: number[] = [4, 8, 11, 70, 4, 9, 10]
  constructor(private rxjsLearn: RxjsLearnService
  ) { }

  ngOnInit(): void {

    this.myfunction(this.numberArr)
    // this.rxjsLearn.myfunction()
  }

  myfunction(arr: number[]) {
    const numArr = arr.map((res, i) => res * i)
    const filterArr = arr.filter((res) => {
      if (res % 2 === 0) {
        return res
      }
      return null
    })
    console.log(filterArr)
    console.log(filterArr.slice(1, 5))
    // const numArr = arr.map((res, i) => { return res})
    console.log(numArr)
    console.log(this.numberArr)
    console.log(this.numberArr.splice(1, 3, 709))
    console.log(this.numberArr.push(10000))
    console.log(this.numberArr)

  }
  call() {
    this.rxjsLearn.myfunction()
  }
}
