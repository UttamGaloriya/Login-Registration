import { Component, Input, OnInit } from '@angular/core';
import { userobj } from '../user';
import { AcountService } from '../services/acount.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user?: userobj | null;

  constructor(private ac: AcountService) {

    this.user = this.ac.userValue;

  }

  ngOnInit(): void {
  }

  logout() {
    this.user = null;
    this.ac.logout();
  }
}
