import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthService } from '../services/health.service';
import { User } from '../user';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {
  id: number = -1
  user?: any
  constructor(private route: ActivatedRoute, private health: HealthService) {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
    });

  }

  ngOnInit(): void {
    this.user = this.health.getMydata(this.id)
    console.log(this.user)
  }
  // displayedColumns: string[] = ['name', 'unit', 'measuerment', 'simple', 'error', 'differnece', 'compersion', 'status'];
  // dataSource = this.user?.patient[0].category
}
