import { Component } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  
})
export class RoleComponent {

  form: any = {
    data: {},
    successMessage: '',
    errorMessage: '',
    inputerror: {}
  }
  constructor(private httpService: HttpserviceService) { }

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
