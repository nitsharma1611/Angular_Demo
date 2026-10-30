import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})

export class LoginComponent {

  form: any = {
    data: {},
    successMessage: '',
    errorMessage: '',
    inputerror: {}
  }
  constructor(private httpService: HttpserviceService, private router: Router) { }

  signIn() {
    this.form.successMessage = '';
    this.form.errorMessage = '';
    this.form.inputerror = {};
    console.log("form data: ", this.form.data);

    this.httpService.post('http://localhost:8080/Auth/login', this.form.data, (response: any) => {
      console.log("response: ", response);

      if (response.success === false && response.result.inputerror) {
        this.form.inputerror = response.result.inputerror;

      }
      if (response.success === false && response.result.message) {
        this.form.errorMessage = response.result.message;
      }



      if (response.success === true && response.result.message) {
        this.form.successMessage = response.result.message;
        this.router.navigateByUrl('welcome');
      }
    });

  }
}