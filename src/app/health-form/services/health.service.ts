import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { myProduct } from 'src/app/myProduct';
import { AlertService } from 'src/app/services/alert.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  myproduct = localStorage.getItem('health')

  constructor(private alert: AlertService, private router: Router) { }
  newId() {
    const user = localStorage.getItem('health')
    if (user !== null) {
      let highId: number = -1;
      const list = JSON.parse(user)
      list.forEach((res: User) => {
        if (res.id > highId) {
          highId = res.id
        }
      });
      return highId + 1
    }
    else return 1;
  }

  healthFormAdd(user: User) {
    const myproduct = localStorage.getItem('health')
    const id = this.newId()
    user.id = id
    if (myproduct != null) {
      const list = JSON.parse(myproduct)
      list.push(user)
      localStorage.setItem('health', JSON.stringify(list))
    } else {
      const arr = []
      arr.push(user)
      localStorage.setItem('health', JSON.stringify(arr))
    }
    this.router.navigateByUrl('/health/table');
  }


  get allProductData() {
    if (this.myproduct !== null) {
      return JSON.parse(this.myproduct)
    }
    else return []
  }

  getMydata(id: number) {

    const oldRecords = localStorage.getItem('health');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      const newid = userList.findIndex((a: any) => a.id == id)
      return userList[newid]
    }
    else return null
  }



  delete() {
    localStorage.removeItem('product')
    this.alert.showNotification("Database delete successfuly", "ok", "success")
  }

  deleteMydata(id: number) {
    if (this.myproduct != null) {
      const list = JSON.parse(this.myproduct)
      list.splice(
        list.findIndex((res: any) => res.id == id), 1
      )
      localStorage.setItem('product', JSON.stringify(list));
      this.alert.showNotification("Data delete successfuly", "ok", "success")
    } else {
      this.alert.showNotification("Data Not found", "ok", "success")
    }
  }

  updateMydata(Data: myProduct, id: number) {
    Data.id = Number(id)
    const myproduct = localStorage.getItem('product')

    if (myproduct != null) {
      const list = JSON.parse(myproduct)
      const index = list.findIndex((res: myProduct) => res.id == id);


      // 
      if (index !== -1) {
        // Assign the ID from the parameter to the updated data
        console.log(Data.id)
        list.splice(index, 1, Data); // Replace the element at the specified index with the updated data
        localStorage.setItem('product', JSON.stringify(list));
        this.alert.showNotification("Data updated successfully", "ok", "success");
        this.router.navigateByUrl('/product/table');
      } else {
        this.alert.showNotification("Data not found", "ok", "info");
      }
    }
    else {
      this.alert.showNotification("Data Not found", "ok", "info")
    }

  }
}
