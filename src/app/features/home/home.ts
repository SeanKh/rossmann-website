import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { ServicesSection } from './services-section/services-section';
import { WhyChooseUs } from './why-choose-us/why-choose-us';
import { Technologies } from './technologies/technologies';

import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    ServicesSection,
    WhyChooseUs,
    Technologies,
    Projects,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
