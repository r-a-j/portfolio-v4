import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ABOUT_CONTENT } from '../../data/about-data';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink, CvModalComponent],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnDestroy {
  readonly showCVModal = signal(false);
  readonly emailCopied = signal(false);
  readonly aboutContent = ABOUT_CONTENT;
  readonly email = 'er.rajpawar@gmail.com';

  readonly coreFocus = [
    'PyTorch & OpenCV',
    'YOLOv8 / U-Net / SAM 2.1',
    'Bayesian Stan & SBI',
    'Angular / NestJS / .NET',
    'Applied AI (Gemini, AWS Bedrock)',
  ];

  readonly impactMetrics: ImpactMetric[] = [
    {
      value: '1st Place',
      label: 'TU Start-up Award 2025',
      detail: '€6,000 Wilo-Foundation & €50,000 TU capital prize',
    },
    {
      value: '< 60 sec',
      label: 'Automated Visual Inspection',
      detail: 'On-site U²-Net & OpenCV analysis replacing slow lab review',
    },
    {
      value: '~10×',
      label: 'Faster CV Annotation',
      detail: 'Label Studio active-learning backend with SAM 2.1',
    },
    {
      value: 'Live App',
      label: 'CineScope (Web & Play Beta)',
      detail: 'Gemini semantic search, share-to-inbox & swipe triage',
    },
  ];

  private copyTimer?: ReturnType<typeof setTimeout>;

  openCV(): void {
    if (window.innerWidth <= 768) {
      window.open(this.aboutContent.pdfPath, '_blank', 'noopener,noreferrer');
    } else {
      this.showCVModal.set(true);
    }
  }

  closeCV(): void {
    this.showCVModal.set(false);
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.markCopied();
    } catch {
      window.location.href = `mailto:${this.email}`;
    }
  }

  private markCopied(): void {
    this.emailCopied.set(true);
    if (this.copyTimer) {
      clearTimeout(this.copyTimer);
    }
    this.copyTimer = setTimeout(() => {
      this.emailCopied.set(false);
    }, 2200);
  }

  ngOnDestroy(): void {
    if (this.copyTimer) {
      clearTimeout(this.copyTimer);
    }
  }
}
