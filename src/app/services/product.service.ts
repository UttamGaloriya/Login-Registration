import { Injectable } from '@angular/core';
import { myProduct } from '../myProduct';
import { AlertService } from './alert.service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myproduct = localStorage.getItem('product')

  constructor(private alert: AlertService, private router: Router) { }
  newId() {
    const myproduct = localStorage.getItem('product')
    if (myproduct !== null) {
      let highId: number = -1;
      const list = JSON.parse(myproduct)
      list.forEach((res: myProduct) => {
        if (res.id > highId) {
          highId = res.id
        }
      });
      return highId + 1

    }
    else return 1;
  }

  productDetailsAdd(productData: myProduct) {
    const myproduct = localStorage.getItem('product')
    const id = this.newId()
    productData.id = id
    if (myproduct != null) {
      const list = JSON.parse(myproduct)
      list.push(productData)
      localStorage.setItem('product', JSON.stringify(list))
    } else {
      const arr = []
      arr.push(productData)
      localStorage.setItem('product', JSON.stringify(arr))
    }
    this.router.navigateByUrl('/product/table');
  }


  get allProductData() {
    if (this.myproduct !== null) {
      return JSON.parse(this.myproduct)
    }
    else return []
  }

  getMydata(id: number) {
    if (this.myproduct != null) {
      let data: any
      const list = JSON.parse(this.myproduct)
      list.forEach((res: any) => {
        if (res.id == id) { data = res }
      })
      return data
    } else { console.log("data not found") }
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
