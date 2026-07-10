import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { ThemeService } from '../../core/services/theme.service';

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

  theme = inject(ThemeService);

  scrollTo(id: string): void {

    const element = document.getElementById(id);

    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });

  }

}
