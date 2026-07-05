import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private fb = inject(FormBuilder);

  submitted = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    company: [''],

    subject: [''],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ]
  });

  submit(): void {

    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log(this.contactForm.value);

    alert('Message sent successfully!');

    this.contactForm.reset();

    this.submitted = false;
  }

}
