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
  public sendEmail(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    emailjs.sendForm(environment.emailServiceId, environment.emailTemplateId, form, environment.emailPublicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Your message has been sent successfully!');
        form.reset();
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Oops! Something went wrong. You can contact me at er.rajpawar@gmail.com');
      });
  }
}
