import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  adminlogin(data) {
    return this.http.post('http://localhost:3000/api/admin/login', data)
  }


  getdata() {
    let option = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))
    return this.http.get('http://localhost:3000/api/admin/getuser', { headers: option })
  }

  deluser(useremail) {
    let option = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))
    return this.http.post('http://localhost:3000/api/admin/deluser', { email: useremail }, { headers: option })
  }

  update(id, data) {
    console.log(id, data)
    let option = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))
    return this.http.post(`http://localhost:3000/api/admin/userup/${id}`, data, { headers: option })
  }

}
