import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {

  form: any = {
    list: [],
    searchParam: {},
    pageNo: 0,
    deleteParams: [],
    successMessage:'',
    errorMessage:''
  }

  constructor(private httpService: HttpserviceService, private router: Router) { }

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

    this.httpService.post('http://localhost:8080/Role/search/' + this.form.pageNo, this.form.searchParam, (response: any) => {
      if (response.success == true) {
        this.form.list = response.result.data;
      }
    })

  }

  onClickCheckBox(id: any) {
    this.form.deleteParams = id;
  }

  delete() {
    this.httpService.get('http://localhost:8080/Role/delete/' + this.form.deleteParams, (response: any) => {
      if (response.success == true) {
        this.form.successMessage = response.result.message;
        this.search();
      }
    })
  }

  edit(url: any) {
    console.log("url: ", url);
   this.router.navigateByUrl(url);
  }

}
