import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ABOUT_CONTENT } from '../../data/about-data';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public showCVModal: boolean = false;
  public safePdfUrl: SafeResourceUrl = '';
  public aboutContent = ABOUT_CONTENT;

  constructor(private sanitizer: DomSanitizer) { }

  public openCV(): void {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.aboutContent.pdfPath);

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
