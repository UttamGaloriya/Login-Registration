import { Component, OnInit } from '@angular/core';
import { HealthService } from '../services/health.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {

  constructor(private health: HealthService) { }

  ngOnInit(): void {
    console.log(this.health.allProductData)
  }
  displayedColumns: string[] = ['no', 'assement', 'action'];
  dataSource = this.health.allProductData;

}
