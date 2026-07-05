import { Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { TranslocoPipe } from '@jsverse/transloco';

import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslocoPipe,
    LanguageSwitcher
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  private router = inject(Router);

  scrollToSection(event: Event, id: string): void {

    event.preventDefault();

    const scroll = () => {
      if (id === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(scroll, 100);
      });
    } else {
      scroll();
    }

  }

}
