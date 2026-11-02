import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ABOUT_CONTENT } from '../../data/about-data';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-about',
  imports: [CvModalComponent],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public showCVModal = signal(false);
  public aboutContent = ABOUT_CONTENT;

  public openCV(): void {    
    if (this.isMobileView()) {
      window.open(this.aboutContent.pdfPath, '_blank');
    } else {
      this.showCVModal.set(true);
    }
  }

  public closeCV(): void {
    this.showCVModal.set(false);
  }

  private isMobileView(): boolean {
    return window.innerWidth <= 768;
  }
}
