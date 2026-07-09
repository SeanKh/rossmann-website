import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100
    });
  }

}
