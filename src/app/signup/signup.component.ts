import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  form: any = {
    data: {},
    errorMessage: {}
  }
constructor(private router: Router) { }
signUp(){
this.form.errorMessage = {};


if(!this.form.data.fName || !this.form.data.fName.trim()){
   this.form.errorMessage.fName = 'Please enter First Name';
}
if(!this.form.data.lName || !this.form.data.lName.trim()){
    this.form.errorMessage.lName  = 'Please enter Last Name';
}
if(!this.form.data.login || !this.form.data.login.trim()){
    this.form.errorMessage.login = 'Please enter Login';
}
if(!this.form.data.password || !this.form.data.password.trim()){
    this.form.errorMessage.password  = 'Please enter Password';
}

console.log('First Name: ',this.form.data.fName);
console.log('Last Name: ',this.form.data.lName);
console.log('login: ',this.form.data.login);
console.log('Password: ',this.form.data.password)
}}