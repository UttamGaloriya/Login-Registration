import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mutlti-product',
  templateUrl: './mutlti-product.component.html',
  styleUrls: ['./mutlti-product.component.scss']
})
export class MutltiProductComponent implements OnInit {

  productForm!: FormGroup
  formValid: boolean = false
  Options: string[] = ['SmartPhone', 'Tv', 'Ac']
  constructor(private fb: FormBuilder, private products: ProductService, private alert: AlertService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      product: this.fb.array([this.fb.group({
        name: ['', [Validators.required,]],
        productId: ['', [Validators.required]],
        price: ['', [Validators.required,]],
        description: ['', [Validators.required,]],
        category: ['', [Validators.required,]],
        available: ['', [Validators.required,]],
      })])
    })
    this.chekdata()
  }


  get productx() {
    return this.productForm.get('product') as FormArray;
  }

  addProductForm() {
    this.productx.push(this.myproduct)
  }
  removeProductForm(i: number) {
    this.productx.removeAt(i)
  }

  ///submit
  addProduct() {
    console.log(this.productForm.valid)
    if (this.productForm.valid) { this.products.productDetailsAdd(this.productForm.value), this.alert.showNotification("data add suceessful", "ok", "success") }
    else { console.log("sorry") }
  }


  myproduct = this.fb.group({
    name: ['', [Validators.required,]],
    price: ['', [Validators.required,]],
    productId: ['', [Validators.required]],
    description: ['', [Validators.required,]],
    category: ['', [Validators.required,]],
    available: ['', [Validators.required,]],
  })
  get productLenght() { return this.productx.length }
  // get f(): { [key: string]: AbstractControl } { return this.productForm.controls.product.; }
  get allproduct() {

    return 1
  }
  chekdata() {
    const data = localStorage.getItem('pdArry')
    if (data != null) {
      let list = JSON.parse(data)
      console.log(list[0].product)
    }
  }
}
