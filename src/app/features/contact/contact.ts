import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslocoPipe
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private fb = inject(FormBuilder);

  private http = inject(HttpClient);

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

    this.http.post('/send-mail.php', this.contactForm.value)
      .subscribe({

        next: () => {

          alert('Message sent successfully!');

          this.contactForm.reset();

          this.submitted = false;

        },

        error: (err) => {

          console.error(err);

          alert('Failed to send message.');

        }

      });

  }

}
