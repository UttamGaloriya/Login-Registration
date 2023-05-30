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
  Id!: number;
  constructor(private fb: FormBuilder, private products: ProductService, private route: ActivatedRoute,) {
    this.route.params.subscribe((res) => {
      this.Id = res['id'];
    });

  }

  ngOnInit(): void {
    this.getupadteData(this.products.getMydata(this.Id))
  }

  getupadteData(data: any) {
    this.productForm = this.fb.group({

      product: this.fb.group({
        name: [data.product.name, [Validators.required,]],
        productId: [data.product.productId, [Validators.required]],
        price: [data.product.price, [Validators.required,]],
        description: [data.product.description, [Validators.required,]],
        category: [data.product.category, [Validators.required,]],
        available: [data.product.available, [Validators.required,]],
      })
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

    if (this.productForm.valid) { this.products.updateMydata(this.productForm.value, this.Id) }
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
