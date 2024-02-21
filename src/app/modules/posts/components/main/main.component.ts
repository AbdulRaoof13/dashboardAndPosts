import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(`Owler - Owl Posts`);
  }

}
