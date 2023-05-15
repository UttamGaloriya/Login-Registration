import { Component } from '@angular/core';
import { AcountService } from './services/acount.service';
import { userobj } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login-Auth';
  user?: userobj | null;
  constructor(private ac: AcountService) {
    this.user = this.ac.userValue;
  }
  ondata() {
    // console.log(this.user)
    console.log(this.ac.userValue)
  }
  onappdata() {
    console.log(this.user)
  }
}
