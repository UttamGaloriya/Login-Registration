import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { myProduct } from 'src/app/myProduct';
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
  obj: any

  constructor(private fb: FormBuilder, private products: ProductService, private alerts: AlertService, private route: ActivatedRoute,) {
    this.route.params.subscribe((res) => {
      this.Id = parseInt(res['id'], 10);
    });

    console.log("cons" + this.Id)


  }

  ngOnInit(): void {
    // this.data = this.products.getMydata(this.Id)
    console.log(this.data)
    this.productForm = this.fb.group({
      product: this.fb.array([])
    })
    this.addMamualProductData(this.products.getMydata(this.Id))

  }

  addMamualProductData(res: myProduct) {
    console.log("working")

    res.product.forEach((element: any) => {
      console.log("foreach working")
      this.productx.push(
        this.fb.group({
          name: [element.name, [Validators.required, this.validateInput]],
          price: [element.price, [Validators.required, Validators.min(0)]],
          productId: [element.productId, [Validators.required, Validators.min(0), Validators.max(999999)]],
          description: [element.description, [Validators.required,]],
          category: [element.category, [Validators.required, this.validateInput]],
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
    if (this.productForm.valid) { this.products.updateMydata(this.productForm.value, this.Id), this.alerts.showNotification("data Update suceessful", "ok", "success") }
    else { console.log("sorry") }
  }

  myproduct = this.fb.group({
    name: ['', [Validators.required, this.validateInput]],
    price: ['', [Validators.required, Validators.min(0)]],
    productId: ['', [Validators.required, Validators.min(0), Validators.max(999999)]],
    description: ['', [Validators.required, this.validateInput]],
    category: ['', [Validators.required,]],
    available: ['', [Validators.required,]],
  })

  get productLenght() { return this.productx.length }

  validateInput(control: AbstractControl) {
    const trimmedValue = control.value.trim();
    if (trimmedValue === '') {
      return { spacesOnly: true };
    }
    return null
  }
}
