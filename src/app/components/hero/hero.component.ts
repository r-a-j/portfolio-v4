import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CvModalComponent } from '../cv-modal/cv-modal.component';
import { ABOUT_CONTENT } from '../../data/about-data';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, CommonModule, CvModalComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public greeting: string;
  public showCVModal = false;
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
      this.showCVModal = true;
    }
  }

  public closeCV(): void {
    this.showCVModal = false;
  }
}
