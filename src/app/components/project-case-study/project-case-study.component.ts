import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import {
  ProjectCaseStudy,
  ProjectDetails,
} from '../../shared/types/project-details';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-project-case-study',
  standalone: true,
  imports: [MarkdownModule, CvModalComponent],
  templateUrl: './project-case-study.component.html',
  styleUrl: './project-case-study.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown)': 'onKeydown($event)',
  },
})
export class ProjectCaseStudyComponent implements OnChanges {
  @Input({ required: true }) project!: ProjectDetails;
  @Input({ required: true }) caseStudy!: ProjectCaseStudy;
  @Input() markdownContent = '';
  @Input() hasReadme = false;
  @Output() requestReadme = new EventEmitter<void>();

  activeFigureIndex: number | null = null;
  showReadme = false;
  showPdfModal = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      this.activeFigureIndex = null;
      this.showPdfModal = false;
      this.showReadme = false;
    }
  }

  openLightbox(index: number): void {
    this.activeFigureIndex = index;
  }

  closeLightbox(): void {
    this.activeFigureIndex = null;
  }

  stepLightbox(delta: number, event?: Event): void {
    event?.stopPropagation();
    const figures = this.caseStudy.figures ?? [];
    if (this.activeFigureIndex === null || figures.length === 0) return;
    this.activeFigureIndex =
      (this.activeFigureIndex + delta + figures.length) % figures.length;
  }

  toggleReadme(): void {
    this.showReadme = !this.showReadme;
    if (this.showReadme && !this.markdownContent && this.hasReadme) {
      this.requestReadme.emit();
    }
  }

  openPdfModal(): void {
    this.showPdfModal = true;
  }

  closePdfModal(): void {
    this.showPdfModal = false;
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.activeFigureIndex === null) return;
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.stepLightbox(1);
    } else if (event.key === 'ArrowLeft') {
      this.stepLightbox(-1);
    }
  }
}
