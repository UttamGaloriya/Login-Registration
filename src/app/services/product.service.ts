import { Injectable } from '@angular/core';
import { myProduct } from '../myProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  myproduct = localStorage.getItem('product')

  constructor() { }
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
  }
  get allProductData() {
    if (this.myproduct !== null) {
      return JSON.parse(this.myproduct)
    }
    else return []
  }

}
