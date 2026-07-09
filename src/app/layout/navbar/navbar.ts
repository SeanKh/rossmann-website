import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TranslocoPipe,
    LanguageSwitcher
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  scrollTo(id: string): void {

    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const offset = 80;

    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth'
    });

  }

}
