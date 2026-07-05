import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { Hero } from './hero/hero';
import { ServicesSection } from './services-section/services-section';
import { WhyChooseUs } from './why-choose-us/why-choose-us';
import { Technologies } from './technologies/technologies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    ServicesSection,
    WhyChooseUs,
    Technologies
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
