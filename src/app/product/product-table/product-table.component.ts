import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DailogService } from 'src/app/dailogbox/dailog.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit, AfterViewInit {
  dataSource!: MatTableDataSource<any>;
  data: any
  displayedColumns: string[] = ['name', 'price', 'description', 'category', 'available', 'Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private products: ProductService, private ds: DailogService) { }

  ngOnInit(): void {
    this.myTableData()
  }

  // ngDoCheck() {
  //   console.log(this.products.allProductData)
  //   this.myTableData()
  // }

  myTableData() {
    let myProduct = localStorage.getItem('product')

    if (myProduct !== null) {
      this.dataSource = new MatTableDataSource(JSON.parse(myProduct));
      this.dataSource.paginator = this.paginator;
    }
    else {
      alert("data is empty")
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  delete(data: any, id: number) {

    this.ds
      .openConfirmDialog(data.product.name, data.product.productId)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.products.deleteMydata(id)
          this.myTableData()
        }
      });
    this.myTableData()
  }
}
