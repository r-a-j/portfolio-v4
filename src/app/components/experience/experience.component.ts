import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { EXPERIENCES } from '../../data/experience-data';
import {
  Experience,
  ExperienceDocument,
  ExperienceMedia,
} from '../../shared/types/experience-details';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-experience',
  imports: [CvModalComponent],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './experience.component.scss',
  host: {
    '(window:keydown)': 'onKeydown($event)',
  },
})
export class ExperienceComponent {
  readonly embedded = input(false);
  readonly experiences: Experience[] = EXPERIENCES;

  // Keep most recent role (PartikelART) open by default; earlier roles stay compact until clicked
  readonly expandedIds = signal<Set<number>>(new Set([5]));
  readonly activeDoc = signal<ExperienceDocument | null>(null);

  readonly lightbox = signal<{
    open: boolean;
    items: ExperienceMedia[];
    index: number;
  }>({
    open: false,
    items: [],
    index: 0,
  });

  private touchX = 0;

  isExpanded(id: number): boolean {
    return this.expandedIds().has(id);
  }

  toggle(id: number): void {
    this.expandedIds.update((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  openLightbox(items: ExperienceMedia[], index: number): void {
    this.lightbox.set({ open: true, items, index });
  }

  closeLightbox(ev?: Event): void {
    ev?.stopPropagation();
    this.lightbox.set({ open: false, items: [], index: 0 });
  }

  prev(ev?: Event): void {
    ev?.stopPropagation();
    this.lightbox.update((state) => {
      if (!state.items.length) {
        return state;
      }
      return {
        ...state,
        index: (state.index - 1 + state.items.length) % state.items.length,
      };
    });
  }

  next(ev?: Event): void {
    ev?.stopPropagation();
    this.lightbox.update((state) => {
      if (!state.items.length) {
        return state;
      }
      return {
        ...state,
        index: (state.index + 1) % state.items.length,
      };
    });
  }

  touchStart(e: TouchEvent): void {
    this.touchX = e.changedTouches[0].clientX;
  }

  touchEnd(e: TouchEvent): void {
    const dist = e.changedTouches[0].clientX - this.touchX;
    if (Math.abs(dist) < 40) {
      return;
    }
    if (dist > 0) {
      this.prev();
    } else {
      this.next();
    }
  }

  openDocument(doc: ExperienceDocument, event: Event): void {
    event.stopPropagation();
    if (window.innerWidth <= 768) {
      window.open(doc.url, '_blank', 'noopener,noreferrer');
    } else {
      this.activeDoc.set(doc);
    }
  }

  closeDocument(): void {
    this.activeDoc.set(null);
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.lightbox().open) {
      return;
    }
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    } else if (event.key === 'ArrowRight') {
      this.next();
    }
  }
}
