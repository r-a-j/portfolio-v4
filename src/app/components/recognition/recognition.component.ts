import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  OFFICIAL_REFERENCE,
  PRESS_COVERAGE,
  PressCategory,
  RECOGNITION_PHOTOS,
  ReferenceDocument,
} from '../../data/recognition-data';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-recognition',
  imports: [CvModalComponent],
  templateUrl: './recognition.component.html',
  styleUrl: './recognition.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown)': 'onKeydown($event)',
  },
})
export class RecognitionComponent {
  readonly reference = OFFICIAL_REFERENCE;
  readonly photos = RECOGNITION_PHOTOS;
  readonly heroPhoto = RECOGNITION_PHOTOS[0];
  readonly galleryPhotos = RECOGNITION_PHOTOS.slice(1);
  readonly allPress = PRESS_COVERAGE;

  readonly pressCategories: ('All' | PressCategory)[] = [
    'All',
    'Official & Awards',
    'Press & Industry',
    'Ecosystem',
    'Video & Photos',
  ];

  readonly activeCategory = signal<'All' | PressCategory>('All');
  readonly activePhotoIndex = signal<number | null>(null);
  readonly activeDoc = signal<ReferenceDocument | null>(null);

  readonly filteredPress = computed(() => {
    const selected = this.activeCategory();
    if (selected === 'All') {
      return this.allPress;
    }
    return this.allPress.filter((item) => item.category === selected);
  });

  readonly activePhoto = computed(() => {
    const idx = this.activePhotoIndex();
    if (idx === null || idx < 0 || idx >= this.photos.length) {
      return null;
    }
    return this.photos[idx];
  });

  selectCategory(cat: 'All' | PressCategory): void {
    this.activeCategory.set(cat);
  }

  getCategoryCount(cat: 'All' | PressCategory): number {
    if (cat === 'All') {
      return this.allPress.length;
    }
    return this.allPress.filter((item) => item.category === cat).length;
  }

  openPhoto(index: number): void {
    this.activePhotoIndex.set(index);
  }

  closePhoto(): void {
    this.activePhotoIndex.set(null);
  }

  prevPhoto(event?: Event): void {
    event?.stopPropagation();
    const cur = this.activePhotoIndex();
    if (cur === null) {
      return;
    }
    this.activePhotoIndex.set((cur - 1 + this.photos.length) % this.photos.length);
  }

  nextPhoto(event?: Event): void {
    event?.stopPropagation();
    const cur = this.activePhotoIndex();
    if (cur === null) {
      return;
    }
    this.activePhotoIndex.set((cur + 1) % this.photos.length);
  }

  openReferenceDoc(doc: ReferenceDocument): void {
    if (window.innerWidth <= 768) {
      window.open(doc.pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      this.activeDoc.set(doc);
    }
  }

  closeReferenceDoc(): void {
    this.activeDoc.set(null);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.activePhotoIndex() === null) {
      return;
    }
    if (event.key === 'Escape') {
      this.closePhoto();
    } else if (event.key === 'ArrowLeft') {
      this.prevPhoto();
    } else if (event.key === 'ArrowRight') {
      this.nextPhoto();
    }
  }
}
