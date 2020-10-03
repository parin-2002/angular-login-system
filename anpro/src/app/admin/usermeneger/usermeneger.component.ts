import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-usermeneger',
  templateUrl: './usermeneger.component.html',
  styleUrls: ['./usermeneger.component.css']
})
export class UsermenegerComponent implements OnInit {

  constructor(private admin: AdminService) { }
  data = []
  getuserdata() {
    this.admin.getdata().subscribe(res => {
      console.log(res['result'])
      this.data = res['result']
      console.log(this.data)
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.getuserdata()
    } else {
      window.location.href = '/admin/login'
    }
  }

  logout() {
    localStorage.removeItem('token')
    window.location.href = "/admin/login"
  }

  delete(email) {
    var result = confirm('really you are want to delete this user')
    //console.log(result)
    if (result) {
      //console.log(email)
      this.admin.deluser(email).subscribe(res => {
        //console.log(res)
        if (res['success']) {
          window.location.href = '/admin/penal'
          alert('user deleted')
        }
      })
    }
  }

  ausername = ''
  aemail = ''
  amobileno = ''
  apassword = ''
  aid = ''
  userolddata(a, b, c, d, e) {
    this.ausername = a
    this.aemail = b
    this.amobileno = c
    this.apassword = d
    this.aid = e
  }
  show = false
  msg = false
  update(data) {
    if (data.username == "") { data.username = this.ausername }
    if (data.email == "") { data.email = this.aemail }
    if (data.password == "") { data.password = this.apassword }
    if (data.mobileno == "") { data.mobileno = this.amobileno }
    console.log(data)
    this.admin.update(this.aid, data).subscribe((res) => {
      if (res['success']) {
        this.show = true
      } else {
        this.msg = true
      }
    })
  }
}
