import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productForm!: FormGroup
  formValid: boolean = false
  Options: string[] = ['SmartPhone', 'Tv', 'Ac']
  constructor(private fb: FormBuilder, private products: ProductService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      product: this.fb.array([this.fb.group({
        name: ['', [Validators.required,]],
        price: ['', [Validators.required,]],
        description: ['', [Validators.required,]],
        category: ['', [Validators.required,]],
        available: ['', [Validators.required,]],
      })])
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
    if (this.productForm.valid) { this.products.productDetailsAdd(this.productForm.value) }
    else { console.log("sorry") }
  }


  myproduct = this.fb.group({
    name: ['', [Validators.required,]],
    price: ['', [Validators.required,]],
    description: ['', [Validators.required,]],
    category: ['', [Validators.required,]],
    available: ['', [Validators.required,]],
  })
  // get f(): { [key: string]: AbstractControl } { return this.productForm.controls.product.; }
  get allproduct() {

    return 1
  }
}
