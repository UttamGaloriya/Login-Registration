import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-array-edit',
  templateUrl: './array-edit.component.html',
  styleUrls: ['./array-edit.component.scss']
})
export class ArrayEditComponent implements OnInit {

  productForm!: FormGroup
  formValid: boolean = false
  Options: string[] = ['SmartPhone', 'Tv', 'Ac']
  Id: number = -1
  data: any

  constructor(private fb: FormBuilder, private products: ProductService, private alert: AlertService, private route: ActivatedRoute,) {
    this.route.params.subscribe((res) => {
      this.Id = res['id'];
    });
    console.log("cons" + this.Id)
  }

  ngOnInit(): void {
    this.data = this.products.getMydata(this.Id)
    console.log("ngon" + this.Id)
    console.log("my edit data" + this.data.product)

    this.productForm = this.fb.group({
      product: this.fb.array([])
    })

    this.addMamualProductData()
  }



  addMamualProductData() {
    this.data.product.forEach((element: any) => {
      this.productx.push(
        this.fb.group({
          name: [element.name, [Validators.required,]],
          price: [element.price, [Validators.required,]],
          productId: [element.productId, [Validators.required]],
          description: [element.description, [Validators.required,]],
          category: [element.category, [Validators.required,]],
          available: [element.available, [Validators.required,]],
        })
      )
    })
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
    if (this.productForm.valid) { this.products.updateMydata(this.productForm.value, this.Id), this.alert.showNotification("data Update suceessful", "ok", "success") }
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

}
