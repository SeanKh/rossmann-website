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

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }

}
