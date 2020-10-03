import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }
  show = false
  success = false
  register(data) {
    this.user.userregister(data).subscribe(res => {
      if (res['success']) {
        this.success = true
      }
      else {
        this.show = true
      }
      console.log(res)
    })
  }

}
