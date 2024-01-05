import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginPageComponent } from './auth-login-page/auth-login-page.component';
import { AuthRegisterPageComponent } from './auth-register-page/auth-register-page.component';
import { AuthContentPageComponent } from './auth-content-page/auth-content-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthLoginPageComponent,
    AuthRegisterPageComponent,
    AuthContentPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
