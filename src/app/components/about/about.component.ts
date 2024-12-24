import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public showCVModal: boolean = false;
  public safePdfUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  public openCV(): void {
    const pdfUrl = 'docs/Raj_Pawar_CV.pdf'; // Path to your PDF file
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);

    if (this.isMobileView()) {
      // Open PDF in a new tab on mobile devices
      window.open(pdfUrl, '_blank');
    } else {
      // Open modal for larger screens
      this.showCVModal = true;
    }
  }

  public closeCV(): void {
    this.showCVModal = false;
  }

  // Detect if the view is mobile based on window width
  private isMobileView(): boolean {
    return window.innerWidth <= 768;
  }
}
