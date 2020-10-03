import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user: UserService) {
  }

  ngOnInit(): void {
  }

  scrollAbout() {
    window.scrollTo(0, 1000);
  }
  scrollContact() {
    window.scrollTo(0, 1500);
  }

  mailData(data) {
    this.user.apimail(data).subscribe(res => {
      if (res['success']) {
        alert("mail sended")
      }
    })

  }

}
