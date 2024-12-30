import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../../environments/environment.prod';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { FormValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
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

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private formValidationService: FormValidationService
  ) { }

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
        this.notificationService.success(
          'Your message has been sent!',
          this.formSuccessMessageDuration
        );
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.notificationService.error(
          'Oops! Something went wrong. Please contact me on er.rajpawar@gmail.com',
          this.sendEmailErrorMessageDuration
        );
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