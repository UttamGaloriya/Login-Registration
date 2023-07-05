import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-dailog',
  templateUrl: './chart-dailog.component.html',
  styleUrls: ['./chart-dailog.component.scss']
})
export class ChartDailogComponent implements OnInit {
  chart: any = ''
  constructor(public dialogRef: MatDialogRef<ChartDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log(this.data)
    this.showMyChart(this.data)
  }
  showMyChart(ass: any) {
    let id = 'MyChart'
    if (this.data == null) {

    } else {
      if (this.chart) {
        this.chart.clear();
        this.chart.destroy();
      }
      let min = ass.range.rangeMin
      let max = ass.range.rangeMax
      let measurements = ass.measurements
      const numOfDatasets = measurements.length;
      const datasets = [];
      const labels = ass.routine
      const labelsLength = labels.length;


      for (let i = 0; i < numOfDatasets; i++) {
        const label = measurements[i];

        // Skip dataset generation if the label is undefined
        if (typeof label === 'undefined') {
          continue;
        }

        const data = this.generateRandomData(min, max, labelsLength);
        const backgroundColor = i === numOfDatasets - 1 ? 'limegreen' : 'blue';
        datasets.push({
          label: label,
          data: data,
          backgroundColor: backgroundColor,
        });
      }

      this.chart = new Chart(id, {
        type: 'line',
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          aspectRatio: 2.5
        }
      });
    }
  }
  generateRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  // Generate random data within a given range
  generateRandomData(min: number, max: number, count: number): number[] {
    const data: number[] = [];
    for (let i = 0; i < count; i++) {
      const randomValue = this.generateRandomNumber(min, max);
      data.push(randomValue);
    }
    return data;
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
