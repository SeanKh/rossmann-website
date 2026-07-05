import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss'
})
export class ServicesSection {

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}
