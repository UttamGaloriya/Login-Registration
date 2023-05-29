import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'price', 'description', 'category', 'available', 'Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private products: ProductService) { }

  ngOnInit(): void {
    this.myTableData()
  }

  myTableData() {
    this.dataSource = new MatTableDataSource(this.products.allProductData[0].product);
    this.dataSource.paginator = this.paginator;
    console.log(this.products.allProductData[0].product)
  }
  delete(id: number) { }
}
