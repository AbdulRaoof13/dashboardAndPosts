import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: any;
  headers: any;
  user: any;
  cities: any;
  pageLayout: BehaviorSubject<any> = new BehaviorSubject({});
  //themeChanged: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private router: Router) { }


  login(username: string, password: string) {
    if(password!='1234'){
      return 'Invalid Password'
    }
    else {
      let token = encodeURI(username+password);
      this.saveAuthData(token,{name:username});
      this.router.navigate(['/homepage']);
      return 'success'
    }

  }

  getUserObj() {
    return JSON.parse(localStorage.getItem('ActingUser') || '{}');
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  getIsAuth() {
    let a = localStorage.getItem('token');
    return a? true : false;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private saveAuthData(token: string, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

}
