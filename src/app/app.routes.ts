import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Services } from './features/services/services';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'services',
    component: Services
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**',
    redirectTo: ''
  }
];
