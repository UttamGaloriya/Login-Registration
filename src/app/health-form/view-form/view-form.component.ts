import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthService } from '../services/health.service';
import { User } from '../user';
import { Chart } from 'chart.js';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ChartDailogComponent } from '../chart-dailog/chart-dailog.component';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {
  id: number = -1
  user?: any
  chart: any
  constructor(private route: ActivatedRoute, private health: HealthService, public dialog: MatDialog,) {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
    });

  }

  ngOnInit(): void {
    this.user = this.health.getMydata(this.id)
    console.log(this.user)
  }
  openDialog(ass: any): void {
    const dialogRef = this.dialog.open(ChartDailogComponent, {
      width: '700px',
      data: ass
    });
  }

}
