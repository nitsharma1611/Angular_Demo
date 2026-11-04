import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: [
  ]
})
export class StudentListComponent implements OnInit {

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

    this.httpService.post('http://localhost:8080/Student/search/' + this.form.pageNo, this.form.searchParam, (response: any) => {
      if (response.success == true) {
        this.form.list = response.result.data;
      }
    })

  }


}
