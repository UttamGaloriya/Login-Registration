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
  @Input() data = this.user?.userName;
  constructor(private ac: AcountService) {

    console.log("yes i am working Home coponent working")
    this.user = this.ac.userValue;
    this.data = this.user?.userName;
  }

  ngOnInit(): void {
  }

  logout() {
    this.user = null;
    this.ac.logout();
  }
}
