import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }
  show = false;
  login(data) {
    this.user.userlogin(data).subscribe(res => {
      console.log(res)
      if (res['success'] && res['token']) {
        console.log(res)
        window.location.href = '/user/home'
      } else {
        this.show = true;
      }
    })
  }
}
