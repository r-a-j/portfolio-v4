import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sendEmail(event: Event): void {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      alert('Please fill out all required fields!');
      return;
    }

    emailjs.sendForm(
      environment.emailServiceId,
      environment.emailTemplateId,
      form,
      environment.emailPublicKey)
      .then(() => {
        alert('Your message has been sent!');
        form.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('Oops! Something went wrong. Please contact me directly.');
      });
  }
}
