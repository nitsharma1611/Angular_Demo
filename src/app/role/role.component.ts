import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  
})
export class RoleComponent implements OnInit {

  form: any = {
    data: {},
    successMessage: '',
    errorMessage: '',
    inputerror: {}
  }
  constructor(private httpService: HttpserviceService, private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe((params: any) => {
        if (params.id) {
          this.form.data.id = params.id;
        }
      })
    }
    ngOnInit() {
      if (this.form.data.id) {
        this.get();
      }
    }
  
    get() {
      this.httpService.get('http://localhost:8080/Role/get/' + this.form.data.id, (response: any) => {
        if (response.success == true) {
          this.form.data = response.result.data;
        }
      })
    }

  roleSave() {
    this.form.successMessage = '';
    this.form.errorMessage = '';
    this.form.inputerror = {};
    console.log("form data: ", this.form.data);

    this.httpService.post('http://localhost:8080/Role/save', this.form.data, (response: any) => {
      console.log("response: ", response);

      if (response.success === false && response.result.inputerror) {
        this.form.inputerror = response.result.inputerror;

      }
      if (response.success === false && response.result.message) {
        this.form.errorMessage = response.result.message;
      }
      if (response.success === true && response.result.message) {
        this.form.successMessage = response.result.message;
      }
    });

  }

}
