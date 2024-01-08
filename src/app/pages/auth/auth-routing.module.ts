import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContentPageComponent } from './auth-content-page/auth-content-page.component';
import { AuthLoginPageComponent } from './auth-login-page/auth-login-page.component';
import { AuthRegisterPageComponent } from './auth-register-page/auth-register-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthContentPageComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginPageComponent
      },
      {
        path: 'register',
        component: AuthRegisterPageComponent
      },
      // {
      //   path: '**',
      //   redirectTo: 'login'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
