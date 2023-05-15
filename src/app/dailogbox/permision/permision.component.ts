import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-permision',
  templateUrl: './permision.component.html',
  styleUrls: ['./permision.component.scss']
})
export class PermisionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PermisionComponent>
  ) { }

  ngOnInit(): void {
  }
  closeDailog() {
    this.dialogRef.close(false);
  }
}
