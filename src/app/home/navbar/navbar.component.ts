import { Component, OnInit } from '@angular/core';
import { AcountService } from 'src/app/services/acount.service';
import { userobj } from 'src/app/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
