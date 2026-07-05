import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {

  languageService = inject(LanguageService);

  language = this.languageService.currentLanguage;

  changeLanguage() {

    this.languageService.setLanguage(
      this.language as 'en' | 'ru' | 'uz'
    );

  }

}
