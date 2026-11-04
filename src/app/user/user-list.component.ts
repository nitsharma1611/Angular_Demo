import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  
})
export class UserListComponent implements OnInit {

  form: any = {
    list: [],
    searchParam: {},
    pageNo: 0,
  }

  constructor(private httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.search();
  }

  next() {
    this.form.pageNo++;
    this.search();
  }

  previous() {
    this.form.pageNo--;
    this.search();
  }

  search() {

    this.httpService.post('http://localhost:8080/User/search/' + this.form.pageNo, this.form.searchParam, (response: any) => {
      if (response.success == true) {
        this.form.list = response.result.data;
      }
    })

  }

}
