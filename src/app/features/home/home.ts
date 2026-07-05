import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { ServicesSection } from './services-section/services-section';
import { WhyChooseUs } from './why-choose-us/why-choose-us';
import { Technologies } from './technologies/technologies';

@Component({
  selector: 'app-home',
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
