import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-mutlti-product',
  templateUrl: './mutlti-product.component.html',
  styleUrls: ['./mutlti-product.component.scss']
})
export class MutltiProductComponent implements OnInit {
  [x: string]: any;

  productForm!: FormGroup
  formValid: boolean = false
  Options: string[] = ['SmartPhone', 'Tv', 'Ac']
  constructor(private fb: FormBuilder, private products: ProductService, private alert: AlertService, private valid: ValidatorsService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      product: this.fb.array([this.createProductForm()])
    })
  }


  get productx() {
    return this.productForm.get('product') as FormArray;
  }

  addProductForm() {
    this.productx.push(this.createProductForm())
  }
  removeProductForm(i: number) {
    this.productx.removeAt(i)
  }

  ///submit
  addProduct() {
    console.log(this.productForm.valid)
    if (this.productForm.valid) {
      this.products.productDetailsAdd(this.productForm.value),
        this.alert.showNotification("data add suceessful", "ok", "success")
    }
  }

  createProductForm() {
    return this.fb.group({
      name: ['', [Validators.required, this.validateInput]],
      price: ['', [Validators.required, Validators.min(0)]],
      productId: ['', [Validators.required, Validators.min(0), Validators.max(999999),]],
      category: ['', Validators.required],
      description: ['', [Validators.required, this.validateInput]],
      available: [true, Validators.required]
    });
  }


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
  //valdtion
  validateInput(control: AbstractControl) {
    const trimmedValue = control.value.trim();
    if (trimmedValue === '') {
      return { spacesOnly: true };
    }
    return null
  }



}
