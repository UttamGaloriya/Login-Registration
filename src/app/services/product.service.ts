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
    if (this.myproduct !== null) {
      let highId: number = -1;
      const list = JSON.parse(this.myproduct)
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
    const id = this.newId()
    productData.id = id
    if (this.myproduct != null) {
      const list = JSON.parse(this.myproduct)
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

  updateMydata(Data: myProduct, id: any) {
    if (this.myproduct != null) {
      const list = JSON.parse(this.myproduct)
      list.splice(
        list.findIndex((res: any) => Data.id), 1
      )
      Data.id = id
      list.push(Data);
      localStorage.setItem('product', JSON.stringify(list));
      this.alert.showNotification("Data upadte successfuly", "ok", "success")
      this.router.navigateByUrl('/product/table');
    }
    else {
      this.alert.showNotification("Data Not found", "ok", "info")
    }

  }
  //try

}
