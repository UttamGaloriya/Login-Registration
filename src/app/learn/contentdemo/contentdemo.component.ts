import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentdemo',
  templateUrl: './contentdemo.component.html',
  styleUrls: ['./contentdemo.component.scss']
})
export class ContentdemoComponent implements OnInit {
  logining: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
