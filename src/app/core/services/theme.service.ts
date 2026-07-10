import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = signal(false);

  constructor() {

    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
      this.enableDark();
    }

  }

  toggle(): void {

    this.darkMode() ? this.enableLight() : this.enableDark();

  }

  enableDark(): void {

    this.darkMode.set(true);

    document.body.classList.add('dark');

    localStorage.setItem('theme', 'dark');

  }

  enableLight(): void {

    this.darkMode.set(false);

    document.body.classList.remove('dark');

    localStorage.setItem('theme', 'light');

  }

}
