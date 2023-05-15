import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snakbar',
  templateUrl: './snakbar.component.html',
  styleUrls: ['./snakbar.component.scss']
})
export class SnakbarComponent implements OnInit {

  constructor(@Inject(SnakbarComponent) public data: any, public snackBarRef: MatSnackBarRef<SnakbarComponent>) { }

  ngOnInit(): void {
  }

}
