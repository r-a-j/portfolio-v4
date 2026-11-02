
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnChanges, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-modal',
  imports: [],
  templateUrl: './cv-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './cv-modal.component.scss'
})
export class CvModalComponent implements OnChanges {
  private sanitizer = inject(DomSanitizer);

  @Input() pdfUrl = '';
  @Input() modalTitle = 'Curriculum vitae';
  @Input() show = false;
  @Output() closeModal = new EventEmitter<void>();

  safePdfUrl: SafeResourceUrl = '';

  ngOnChanges(): void {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  handleClose(): void {
    this.closeModal.emit();
  }
}
