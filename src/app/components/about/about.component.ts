import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [ExperienceComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showCVModal: boolean = false; // State to show/hide modal
  cvPath!: SafeResourceUrl; // PDF Path with safe URL

  constructor(private sanitizer: DomSanitizer) {}

  openCV(): void {
    const cvUrl = 'https://rajpawar.in/assets/cv.pdf'; // Place your CV in assets folder
    this.cvPath = this.sanitizer.bypassSecurityTrustResourceUrl(cvUrl);
    this.showCVModal = true;
  }

  closeCV(): void {
    this.showCVModal = false;
  }
}
