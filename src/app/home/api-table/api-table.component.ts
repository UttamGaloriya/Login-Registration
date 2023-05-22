import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DailogService } from 'src/app/dailogbox/dailog.service';
import { AcountService } from 'src/app/services/acount.service';
import { UserService } from 'src/app/services/user.service';
import { userobj } from 'src/app/user';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.scss']
})
export class ApiTableComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;



  constructor(private ac: AcountService, private ds: DailogService, private userService: UserService) { }

  ngOnInit(): void {


    this.userService.getAllData()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
        console.log(data)

      })

    this.userService.getUserData(50)
      .subscribe(data => {
        console.log(data)
        // this.dataSource = new MatTableDataSource<any>([data]);
        // this.dataSource.paginator = this.paginator;
        // console.log(data.id)
      }, error => { console.log("error") }, () => { console.log("Completed") })

  }


  displayedColumns: string[] = ['position', 'name', 'weight',];
  // displayedColumns: string[] = ['position', 'name'];
}
