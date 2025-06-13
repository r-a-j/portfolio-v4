import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_CONTENT } from '../../data/about-data';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CvModalComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public showCVModal: boolean = false;
  public aboutContent = ABOUT_CONTENT;
  
  constructor() { }

  public openCV(): void {    
    if (this.isMobileView()) {
      window.open(this.aboutContent.pdfPath, '_blank');
    } else {
      this.showCVModal = true;
    }
  }

  public closeCV(): void {
    this.showCVModal = false;
  }

  private isMobileView(): boolean {
    return window.innerWidth <= 768;
  }
}
