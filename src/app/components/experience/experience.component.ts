import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject,
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
  imports: [CommonModule, CvModalComponent],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './experience.component.scss',
  host: {
    '(window:keydown)': 'onKeydown($event)',
  },
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private io?: IntersectionObserver;

  public experiences: Experience[] = EXPERIENCES;
  // Expand the most recent flagship role (PartikelART) by default so recruiters see it immediately
  private expandedIds = new Set<number>([5]);

  readonly activeDoc = signal<ExperienceDocument | null>(null);

  lightbox = {
    open: false,
    items: [] as ExperienceMedia[],
    index: 0,
  };
  private touchX = 0;

  openLightbox(arr: ExperienceMedia[], idx: number): void {
    this.lightbox.open = true;
    this.lightbox.items = arr;
    this.lightbox.index = idx;
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

  prev(ev?: Event): void {
    ev?.stopPropagation();
    const { items, index } = this.lightbox;
    this.lightbox.index = (index - 1 + items.length) % items.length;
  }

  next(ev?: Event): void {
    ev?.stopPropagation();
    const { items, index } = this.lightbox;
    this.lightbox.index = (index + 1) % items.length;
  }

  closeLightbox(ev?: Event): void {
    this.lightbox.open = false;
    ev?.stopPropagation();
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

  toggle(id: number): void {
    if (this.expandedIds.has(id)) {
      this.expandedIds.delete(id);
    } else {
      this.expandedIds.add(id);
    }
  }

  isExpanded(id: number): boolean {
    return this.expandedIds.has(id);
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.lightbox.open) {
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

  ngAfterViewInit(): void {
    const items = this.host.nativeElement.querySelectorAll('.timeline-item');

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in-view'));
      return;
    }

    this.io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => this.io?.observe(item));
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
