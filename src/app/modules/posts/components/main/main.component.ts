import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  constructor(private title: Title, private authService:AuthService) {}

  ngOnInit(): void {
    this.title.setTitle(`Owler - Owl Posts`);
  }

  logout() {
    this.authService.logout()
  }

}
