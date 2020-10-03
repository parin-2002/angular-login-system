import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  apimail(data) {
    console.log(data)
    return this.http.post('http://localhost:3000/api/user/mail', data)
  }

  userregister(data) {
    return this.http.post('http://localhost:3000/api/user/register', data)
  }

  userlogin(data) {
    return this.http.post('http://localhost:3000/api/user/login', data)
  }

}