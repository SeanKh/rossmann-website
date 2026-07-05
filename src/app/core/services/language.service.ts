import { Injectable, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export type Language = 'en' | 'ru' | 'uz';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private transloco = inject(TranslocoService);

  constructor() {

    const saved = localStorage.getItem('language');

    if (saved === 'en' || saved === 'ru' || saved === 'uz') {
      this.setLanguage(saved);
    } else {
      this.setLanguage('en');
    }

  }

  setLanguage(language: Language): void {

    this.transloco.setActiveLang(language);

    localStorage.setItem('language', language);

  }

  get currentLanguage(): Language {

    const lang = this.transloco.getActiveLang();

    return (lang === 'ru' || lang === 'uz') ? lang : 'en';

  }

}
