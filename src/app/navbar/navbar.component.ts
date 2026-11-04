import { Component } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  form: any = {
    data: {}
  }

  constructor(private httpService: HttpserviceService, private router: Router) { }

  isLogIn() {
    let check = localStorage.getItem('firstName');
    if (check != null && check) {
      this.form.data.firstName = check;
      this.form.data.roleName = localStorage.getItem('roleName');
      this.form.data.id = localStorage.getItem('id');
      return true;
    }
    return false;
  }
  logout() {

    localStorage.clear();

    this.httpService.get('http://localhost:8080/Auth/logout', (response: any) => {
      console.log('response:', response);
      if (response.success === true) {
      }
    }
    );
    this.router.navigateByUrl('/login');

  }
}