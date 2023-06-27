import { Component } from '@angular/core';
import { AcountService } from './services/acount.service';
import { userobj } from './user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: userobj = {
    userName: "uttam",
    userEmail: "uttam@gmail.com",
    userPassword: "fshdbfjsbdfjdsh",
    userType: "admin",
    userNumber: 123456,

  }
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {

  }
}
