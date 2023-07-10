import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, concat, from, fromEvent, interval, of, timer, } from 'rxjs';
import { catchError, concatMap, delay, filter, map, retry, scan, take, throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsLearnService {
  subject = new Subject<number>();
  bheviourSubject = new BehaviorSubject<string>("uttam galoriya")
  numberArr: Observable<number> = from([4, 8, 11, 70, 4, 9, 10])
  constructor() { }
  // myfunction() {
  //   // fromEvent(document, 'click').subscribe(() => console.log('Clicked!+'));


  //   // fromEvent(document, 'click')
  //   //   .pipe(scan((count) => count + 1, 0))
  //   //   .subscribe((count) => console.log(`Clicked ${count} times`));

  //   // fromEvent(document, 'click')
  //   //   .pipe(
  //   //     throttleTime(1000),
  //   //     scan((count) => count + 1, 0)
  //   //   )
  //   //   .subscribe((count) => console.log(`Clicked ${count} times`));
  //   // fromEvent(document, 'click')
  //   //   .pipe(
  //   //     throttleTime(1000),
  //   //     map((event: any) => event.clientX),
  //   //     scan((count, clientX) => count + clientX, 0)
  //   //   )
  //   //   .subscribe((count) => console.log(count));
  //   // const observable = new Observable((subscriber) => {
  //   //   subscriber.next(1);
  //   //   subscriber.next(2);
  //   //   subscriber.next(3);
  //   //   setTimeout(() => {
  //   //     subscriber.next(4);
  //   //     subscriber.complete();
  //   //   }, 1000);
  //   // });

  //   // console.log('just before subscribe');
  //   // observable.subscribe({
  //   //   next(x) {
  //   //     console.log('got value ' + x);
  //   //   },
  //   //   error(err) {
  //   //     console.error('something wrong occurred: ' + err);
  //   //   },
  //   //   complete() {
  //   //     console.log('done');
  //   //   },
  //   // });
  //   // console.log('just after subscribe');
  //   const source1$ = of('A', 'B', 'C').pipe(delay(1000));
  //   const source2$ = of('D', 'E', 'F');

  //   concat(source1$, source2$).subscribe(console.log);
  //   // Output: A (after 1 second), B, C, D, E, F

  //   // Example with concatMap operator
  //   const source$ = of('AB', 'BC', 'CD');

  //   source$.pipe(concatMap((value) => of(value).pipe(delay(1000)))).subscribe(console.log);
  //   // Output: A (after 1 second), B (after 2 seconds), C (after 3 seconds)


  //   // const apiData = ajax('/api/data').pipe(
  //   //   map((res: any) => {
  //   //     if (!res.response) {
  //   //       console.log('Error occurred.');
  //   //       throw new Error('Value expected!');
  //   //     }
  //   //     return res.response;
  //   //   }),
  //   //   retry(3), // Retry up to 3 times before failing
  //   //   catchError(() => of([]))
  //   // );

  //   // apiData.subscribe({
  //   //   next(x: any) { console.log('data: ', x); },
  //   //   error() { console.log('errors already caught... will not run'); }
  //   // });
  //   const numbers = interval(500);

  //   const takeFourNumbers = numbers.pipe(take(1));

  //   takeFourNumbers.subscribe((x: any) => console.log('Next: ', x));

  //   // This could be any observable
  //   const source = of(1, 2, 3);

  //   timer(3000)
  //     .pipe(concatMap(() => source))
  //     .subscribe(console.log);
  // }
  myfunction() {
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)
    this.subject.next(1)
    this.subject.subscribe((res) => console.log(res))
    this.bheviourSubject.next('1');
    this.bheviourSubject.next('jigg')
    this.bheviourSubject.subscribe((res) => console.log(res))
    console.log("ji")


    let arr$ = this.numberArr.pipe(
      filter(v => v % 2 === 0),
      map(v => v * 10)
    )
    arr$.subscribe(
      (value) => console.log(`Even number ${value}`),
      (error) => (console.log(error)),
      () => (console.log('complete'))
    )
  }
}




