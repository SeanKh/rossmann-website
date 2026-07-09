import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [TranslocoPipe],
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
