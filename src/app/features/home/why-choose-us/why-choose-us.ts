import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss'
})
export class WhyChooseUs {}
