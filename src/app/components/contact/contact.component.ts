import { Component, OnInit, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment.prod';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { FormValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private notificationService = inject(NotificationService);
  private formValidationService = inject(FormValidationService);
  private cdr = inject(ChangeDetectorRef);

  public contactForm!: FormGroup;
  public formErrorMessageDuration = 5000;
  public formSuccessMessageDuration = 5000;
  public sendEmailErrorMessageDuration = 10000;

  public readonly minNameLength = 3;
  public readonly maxNameLength = 150;
  public readonly minEmailLength = 5;
  public readonly maxEmailLength = 254;
  public readonly minMessageLength = 20;
  public readonly maxMessageLength = 2000;

  public ngOnInit(): void {
    this.contactForm = this.initializeForm();
  }

  public sendEmail(): void {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      this.notificationService.error(
        'Please fill in all the fields correctly.',
        this.formErrorMessageDuration
      );

      return;
    }

    const formData = this.contactForm.value;

    emailjs
      .send(
        environment.emailServiceId,
        environment.emailTemplateId,
        formData,
        environment.emailPublicKey
      )
      .then(() => {
        this.notificationService.messageSent(
          'Your message has been sent!',
          this.formSuccessMessageDuration
        );
        this.contactForm.reset();
        this.cdr.markForCheck();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.notificationService.error(
          'Oops! Something went wrong. Please contact me on er.rajpawar@gmail.com',
          this.sendEmailErrorMessageDuration
        );
        this.cdr.markForCheck();
      });
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(this.minNameLength),
          Validators.maxLength(this.maxNameLength),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(this.minEmailLength),
          Validators.maxLength(this.maxEmailLength),
          this.formValidationService.isValidEmail.bind(this.formValidationService),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(this.minMessageLength),
          Validators.maxLength(this.maxMessageLength),
        ],
      ],
    });
  }
}
