import { Injectable, Input } from '@angular/core';
import { userobj } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AcountService {


  userlist: userobj[];
  userValueData?: userobj | null;

  constructor(private route: ActivatedRoute, private router: Router, private notfication: AlertService) {
    this.userlist = [];
    console.log(this.userlist)

  }
  //get value for login and authguard
  public get userValue() {
    const onedb = localStorage.getItem('onedata');
    if (onedb !== null) {
      const list = JSON.parse(onedb)
      this.userValueData = list[0]
    }
    return this.userValueData
  }


  //new id genrate
  newId() {
    const oldRecord = localStorage.getItem('userList')
    if (oldRecord !== null) {
      let highId: number = -1
      const userList = JSON.parse(oldRecord);
      userList.forEach((user: any) => {
        if (user.userId > highId) { highId = user.userId }
      });
      highId = highId + 1
      return highId;
    } else { return 1; }
  }

  //save data first time
  savedata(userDatax: userobj) {
    const latestId = this.newId()
    userDatax.userId = latestId;
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.push(userDatax);
      console.log(userList)
      localStorage.setItem('userList', JSON.stringify(userList));
    } else {
      const userArr = [];
      userArr.push(userDatax);
      localStorage.setItem('userList', JSON.stringify(userArr));
    }
    this.router.navigateByUrl('/login');
    this.notfication.showNotification("congratulations registration successfuly done", "ok", "success");
  }

  //delete data 
  delete(id: number) {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(
        userList.findIndex((a: any) => a.userId == id),
        1
      );
      localStorage.setItem('userList', JSON.stringify(userList));
      this.notfication.showNotification("Delete", "ok", "success");
    } else {
      alert('database is empty')
    }
  }

  //get data 
  getdata(id: number) {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      const newid = userList.findIndex((a: any) => a.userId == id)
      return userList[newid]
    }
  }

  //get email for check alreday exit or not
  getemail(email: string) {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      const newid = userList.findIndex((a: any) => a.userEmail == email)
      return newid;
    }
  }


  //user login
  login(email: string, password: string) {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      const newid = userList.findIndex((a: any) => a.userEmail == email)

      if (newid >= 0) {
        if (userList[newid].userPassword == password) {
          /*local storage user data store for user login */
          const onedb = localStorage.getItem('onedata');
          if (onedb !== null) { localStorage.removeItem('onedata') }
          const userArr = [];
          userArr.push(userList[newid]);
          localStorage.setItem('onedata', JSON.stringify(userArr));
          this.router.navigateByUrl('/home');
          this.notfication.showNotification("Login successfuly done", "ok", "success");
        }
        else { this.notfication.showNotification("password is inavalid ", "ok", 'error'); }
      }
      else { this.notfication.showNotification("invalid user name ", "ok", 'error'); }
    }
    else { this.notfication.showNotification("databse is empty ", "ok", 'error'); };
  }


  //logout and data empty
  logout() {
    const onedb = localStorage.getItem('onedata');
    if (onedb !== null) { localStorage.removeItem('onedata') }
    this.userValueData = null
    this.router.navigate(['/login']);
  }

  //update data
  update(data: userobj, id: any) {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a: any) => data.userId), 1);
      data.userId = id
      userList.push(data);
      localStorage.setItem('userList', JSON.stringify(userList));
    } this.router.navigateByUrl('/home/table');
  }

}
