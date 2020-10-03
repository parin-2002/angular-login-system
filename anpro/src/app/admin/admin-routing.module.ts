import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { UsermenegerComponent } from './usermeneger/usermeneger.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'penal', component: UsermenegerComponent },
  { path: 'userupdate', component: UpdateComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
