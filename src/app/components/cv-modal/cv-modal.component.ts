import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-modal',
  imports: [CommonModule],
  templateUrl: './cv-modal.component.html',
  styleUrl: './cv-modal.component.scss'
})
export class CvModalComponent {
  @Input() pdfUrl: string = '';
  @Input() modalTitle: string = 'Curriculum vitae';
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  safePdfUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(): void {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  handleClose(): void {
    this.close.emit();
  }
}
