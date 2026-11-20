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
  @Input() modalTitle = 'Curriculum Vitae';
  @Input() show = false;
  @Output() closeModal = new EventEmitter<void>();

  safePdfUrl: SafeResourceUrl = '';

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
