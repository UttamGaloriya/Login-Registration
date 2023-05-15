import { Component, OnInit } from '@angular/core';
import { DailogService } from 'src/app/dailogbox/dailog.service';
import { AcountService } from 'src/app/services/acount.service';
import { userobj } from 'src/app/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {
  savedata?: userobj
  tablsub?: number
  userlist: any
  constructor(private ac: AcountService, private ds: DailogService) { this.userlist = []; }

  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userlist = JSON.parse(records);
      console.log(this.userlist)
    }
  }
  displayedColumns: string[] = ['No', 'Name', 'Email', 'Type', 'Number', 'Password', 'Address', 'Action'];
  // dataSource = this.userlist;

  gettablesubvalue(id: number) {

    if (this.tablsub === id) {
      this.tablsub = undefined
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
            this.userlist = JSON.parse(records);
            console.log(this.userlist)
          }
        }
      });


  }
}
