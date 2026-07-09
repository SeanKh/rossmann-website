import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslocoPipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  currentYear = new Date().getFullYear();

  scrollTo(id: string): void {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }

}
