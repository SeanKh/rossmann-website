import { Component, inject, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {

  private transloco = inject(TranslocoService);

  activeLang = signal(this.transloco.getActiveLang());

  changeLanguage(lang: string): void {

    this.transloco.setActiveLang(lang);

    localStorage.setItem('lang', lang);

    this.activeLang.set(lang);

  }

}
