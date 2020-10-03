import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../user/login/login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
  }

  show = false
  login(data) {
    this.admin.adminlogin(data).subscribe(res => {
      if (res['success'] && res['token']) {
        localStorage.setItem('token', res['token'])
        window.location.href = '/admin/penal'
      } else {
        this.show = true;
      }
    })
  }
}
