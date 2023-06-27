import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  data: any
  constructor(private datas: DataService) { }

  ngOnInit(): void {
  }
  getData() {
    this.datas.getData().subscribe(res => this.data = res)
  }
}
