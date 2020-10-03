import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { UsermenegerComponent } from './usermeneger/usermeneger.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [LoginComponent, UsermenegerComponent, UpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    UsermenegerComponent,
    UpdateComponent
  ]
})
export class AdminModule { }
