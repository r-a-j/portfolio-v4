import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CvModalComponent } from '../cv-modal/cv-modal.component';
import { ABOUT_CONTENT } from '../../data/about-data';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, CvModalComponent],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public greeting: string;
  public showCVModal = signal(false);
  public aboutContent = ABOUT_CONTENT;

  constructor() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = "Good Morning";
    } else if (hour < 18) {
      this.greeting = "Good Afternoon";
    } else {
      this.greeting = "Good Evening";
    }
  }

  public openCV(): void {
    if (window.innerWidth <= 768) {
      window.open(this.aboutContent.pdfPath, '_blank');
    } else {
      this.showCVModal.set(true);
    }
  }

  public closeCV(): void {
    this.showCVModal.set(false);
  }
}
