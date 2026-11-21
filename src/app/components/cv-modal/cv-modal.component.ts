import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv-modal',
  imports: [],
  templateUrl: './cv-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './cv-modal.component.scss',
  host: {
    '(window:keydown.escape)': 'onEscape()',
  },
})
export class CvModalComponent implements OnChanges {
  private sanitizer = inject(DomSanitizer);

  @Input() pdfUrl = '';
  @Input() modalTitle = 'Document Preview';
  @Input() show = false;
  @Output() closeModal = new EventEmitter<void>();

  safePdfUrl: SafeResourceUrl = '';

  get downloadFileName(): string {
    const cleaned = this.pdfUrl.split('?')[0].split('#')[0];
    const segment = cleaned.split('/').pop();
    return segment && segment.endsWith('.pdf') ? segment : 'Document.pdf';
  }

  ngOnChanges(): void {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  onEscape(): void {
    if (this.show) {
      this.handleClose();
    }
  }

  handleClose(): void {
    this.closeModal.emit();
  }
}
