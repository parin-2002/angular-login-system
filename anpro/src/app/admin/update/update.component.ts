import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['../../user/login/login.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
    } else {
      window.location.href = '/admin/login'
    }
  }

  update(data) {
    console.log(data)
  }

}
