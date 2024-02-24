import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  email: any;
  password: any;
  theme: any;

  constructor(private authService: AuthService, private messageService: MessageService, private router: Router) {
    if(this.authService.getIsAuth()) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {

  }

  login(loginForm: NgForm) {

    if (!loginForm.valid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please enter both username and password' })
      return
    }
    else {
      let result = this.authService.login(loginForm.value.username, loginForm.value.password);
      if (result != 'success') {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid password, try forgot password' })
      }
    }

  }

  ngOnDestroy(): void {

  }

  forgot() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Forgot your password? try logging in with 1234' })
  }
}
