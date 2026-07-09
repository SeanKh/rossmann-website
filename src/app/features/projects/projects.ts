import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {}
