import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import {
  ProjectDetails,
  ProjectShowcase,
} from '../../shared/types/project-details';

@Component({
  selector: 'app-project-showcase',
  imports: [],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown)': 'onKeydown($event)',
  },
})
export class ProjectShowcaseComponent {
  readonly project = input.required<ProjectDetails>();
  readonly showcase = input.required<ProjectShowcase>();

  readonly activeScreenshotIndex = signal<number | null>(null);

  readonly activeScreenshot = computed(() => {
    const index = this.activeScreenshotIndex();
    const screenshots = this.showcase().screenshots;
    if (index === null || index < 0 || index >= screenshots.length) {
      return null;
    }
    return screenshots[index];
  });

  openLightbox(index: number): void {
    this.activeScreenshotIndex.set(index);
  }

  closeLightbox(): void {
    this.activeScreenshotIndex.set(null);
  }

  showPreviousScreenshot(event?: Event): void {
    event?.stopPropagation();
    const total = this.showcase().screenshots.length;
    const current = this.activeScreenshotIndex();
    if (current === null || total === 0) {
      return;
    }
    this.activeScreenshotIndex.set((current - 1 + total) % total);
  }

  showNextScreenshot(event?: Event): void {
    event?.stopPropagation();
    const total = this.showcase().screenshots.length;
    const current = this.activeScreenshotIndex();
    if (current === null || total === 0) {
      return;
    }
    this.activeScreenshotIndex.set((current + 1) % total);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.activeScreenshotIndex() === null) {
      return;
    }

    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      this.showPreviousScreenshot();
    } else if (event.key === 'ArrowRight') {
      this.showNextScreenshot();
    }
  }
}
