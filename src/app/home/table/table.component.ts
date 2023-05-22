import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DailogService } from 'src/app/dailogbox/dailog.service';
import { AcountService } from 'src/app/services/acount.service';
import { UserService } from 'src/app/services/user.service';
import { userobj } from 'src/app/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})

export class TableComponent implements OnInit {
  savedata?: userobj
  apiArry: any
  tablsub: number = 0
  addressMore: number = -1
  showAll: boolean = false;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['No', 'Name', 'Email', 'Type', 'Number', 'Password', 'Address', 'Action'];


  constructor(private ac: AcountService, private ds: DailogService, private userService: UserService) { }

  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if (records !== null) {
      const userdata = JSON.parse(records);
      this.dataSource = new MatTableDataSource<any>(userdata);
      console.log(userdata)


    }
  }

  //full address show
  togglAddress(id: number) {
    if (this.addressMore === id) {
      this.addressMore = -1
    } else { this.addressMore = id }
  }

  //mutlipal addreess show
  toggleshow(id: number) {
    if (this.tablsub === id) {
      this.tablsub = 0
    } else { this.tablsub = id }
  }




  delete(id: number) {
    this.savedata = this.ac.getdata(id)

    this.ds
      .openConfirmDialog(this.savedata?.userName, this.savedata?.userEmail)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.ac.delete(id);
          const records = localStorage.getItem('userList');
          if (records !== null) {
            this.dataSource = JSON.parse(records);
            console.log(this.dataSource)
          }
        }
      });


  }
}
