import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm!: FormGroup
  formValid: boolean = false
  Options: string[] = ['SmartPhone', 'Tv', 'Ac']
  Id?: number;
  constructor(private fb: FormBuilder, private products: ProductService, private route: ActivatedRoute,) {
    this.route.params.subscribe((res) => {
      this.Id = res['id'];
    });

  }

  ngOnInit(): void {
    console.log(this.products.allProductData[2].product)
    this.getupadteData(this.products.allProductData[2].product[0])
  }

  getupadteData(data: any) {
    this.productForm = this.fb.group({
      product: this.fb.array([this.fb.group({
        name: [data.name, [Validators.required,]],
        price: [data.price, [Validators.required,]],
        description: [data.description, [Validators.required,]],
        category: [data.category, [Validators.required,]],
        available: [data.available, [Validators.required,]],
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
