import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ABOUT_CONTENT } from '../../data/about-data';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-about',
  imports: [CvModalComponent],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly embedded = input(false);
  readonly showCVModal = signal(false);
  readonly activePdfUrl = signal('');
  readonly activeModalTitle = signal('Reference Letter');
  readonly aboutContent = ABOUT_CONTENT;

  openPdf(url: string, title: string): void {
    if (window.innerWidth <= 768) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      this.activePdfUrl.set(url);
      this.activeModalTitle.set(title);
      this.showCVModal.set(true);
    }
  }

  closeCV(): void {
    this.showCVModal.set(false);
  }
}
