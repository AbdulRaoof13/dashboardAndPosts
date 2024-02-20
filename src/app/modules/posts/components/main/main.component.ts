import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  toggleMenu() {
    let menuMobile = document.getElementById('navbar-default');
    menuMobile?.classList
  }
  
}
