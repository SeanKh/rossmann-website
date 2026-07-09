import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss'
})
export class Technologies {}
