import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
  input,
  signal,
} from '@angular/core';
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
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  readonly embedded = input(false);
  private fb = inject(FormBuilder);
  private notificationService = inject(NotificationService);
  private formValidationService = inject(FormValidationService);

  public contactForm!: FormGroup;
  public readonly email = 'er.rajpawar@gmail.com';
  public readonly emailCopied = signal(false);
  public readonly isSending = signal(false);

  public readonly minNameLength = 2;
  public readonly maxNameLength = 150;
  public readonly minEmailLength = 5;
  public readonly maxEmailLength = 254;
  public readonly minMessageLength = 10;
  public readonly maxMessageLength = 2000;

  private copyTimer?: ReturnType<typeof setTimeout>;

  public ngOnInit(): void {
    this.contactForm = this.fb.group({
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

  public async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.emailCopied.set(true);
      this.notificationService.success('Email address copied to clipboard.', 3000);
      if (this.copyTimer) {
        clearTimeout(this.copyTimer);
      }
      this.copyTimer = setTimeout(() => this.emailCopied.set(false), 2200);
    } catch {
      window.location.href = `mailto:${this.email}`;
    }
  }

  public sendEmail(): void {
    if (this.isSending()) {
      return;
    }

    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      this.notificationService.error('Please fill in all fields before sending.', 4500);
      return;
    }

    this.isSending.set(true);
    const formData = this.contactForm.value;

    emailjs
      .send(
        environment.emailServiceId,
        environment.emailTemplateId,
        formData,
        environment.emailPublicKey
      )
      .then(() => {
        this.notificationService.messageSent('Message sent. I will reply shortly.', 5000);
        this.contactForm.reset();
        this.isSending.set(false);
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.notificationService.error(
          'Could not send message via form. Please email er.rajpawar@gmail.com directly.',
          7000
        );
        this.isSending.set(false);
      });
  }

  public ngOnDestroy(): void {
    if (this.copyTimer) {
      clearTimeout(this.copyTimer);
    }
  }
}
