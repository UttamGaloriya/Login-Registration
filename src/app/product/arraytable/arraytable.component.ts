import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DailogService } from 'src/app/dailogbox/dailog.service';
import { AcountService } from 'src/app/services/acount.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { userobj } from 'src/app/user';

@Component({
  selector: 'app-arraytable',
  templateUrl: './arraytable.component.html',
  styleUrls: ['./arraytable.component.scss']
})
export class ArraytableComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  data: any
  displayedColumns: string[] = ['name', 'price', 'description', 'category', 'available', 'Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private products: ProductService, private ds: DailogService) { }

  ngOnInit(): void {
    this.myTableData()
  }

  myTableData() {
    let myProduct = localStorage.getItem('product')

    if (myProduct !== null) {
      this.data = JSON.parse(myProduct)
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
