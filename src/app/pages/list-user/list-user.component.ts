import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users:Array<any> = [];
  page:number = 1;

  length = 0;
  pageSize = 6;

  constructor(
    private api:ApiService,
  ) { }

  ngOnInit(): void {
    this.loadUsers(this.page);
  }

  async loadUsers(page){
    const data = await this.api.loadListUser(page);
    if(!data.error){
      //console.log(data);
      this.users = data.data;
      this.length = data.total;
    }
    //console.log(data);
  }

  changePage(e){
    this.loadUsers(e.pageIndex + 1);
    //console.log(e);
  }

}
