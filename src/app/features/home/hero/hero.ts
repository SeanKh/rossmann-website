import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
