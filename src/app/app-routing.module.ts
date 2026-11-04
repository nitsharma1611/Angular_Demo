import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { RoleListComponent } from './role/role-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "role",
    component: RoleComponent
  },
  {
    path: "roleList",
    component: RoleListComponent
  },
  {
    path: "student",
    component: StudentComponent
  }
  ,
  {
    path: "studentList",
    component: StudentListComponent
  }
  ,
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "role/:id",
    component: RoleComponent
  }
  ,
  {
    path: "userList",
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
