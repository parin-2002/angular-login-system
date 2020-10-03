import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
