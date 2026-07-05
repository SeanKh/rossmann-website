import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss'
})
export class Technologies {

  technologies = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: '.NET', icon: 'fas fa-code' },
    { name: 'Spring', icon: 'fas fa-leaf' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];

}
