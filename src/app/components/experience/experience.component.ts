import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { EXPERIENCES } from '../../data/experience-data';
import { Experience } from '../../shared/types/experience-details';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  public experiences: Experience[] = EXPERIENCES;  
  private expandedIds = new Set<number>();  
  lightbox = {
    open: false,
    src: '',
    items: [] as { url: string }[],
    index: 0,
  };  
  private touchX = 0;

  constructor(private host: ElementRef<HTMLElement>) { }

  openLightbox(arr: { url: string }[], idx: number) {
    this.lightbox.open = true;
    this.lightbox.src = arr[idx].url;
    this.lightbox.items = arr;
    this.lightbox.index = idx;
  }

  touchStart(e: TouchEvent) {
    this.touchX = e.changedTouches[0].clientX;
  }

  touchEnd(e: TouchEvent) {
    const dist = e.changedTouches[0].clientX - this.touchX;
    if (Math.abs(dist) < 40) { 
      return; 
    }
    dist > 0 ? this.prev() : this.next();
  }
  
  prev(ev?: Event) {
    ev?.stopPropagation();
    const { items, index } = this.lightbox;
    this.lightbox.index = (index - 1 + items.length) % items.length;
  }
  
  next(ev?: Event) {
    ev?.stopPropagation();
    const { items, index } = this.lightbox;
    this.lightbox.index = (index + 1) % items.length;
  }

  closeLightbox(ev?: Event) {
    this.lightbox.open = false;
    this.lightbox.src = '';
    ev?.stopPropagation();
  }

  toggle(id: number): void {
    this.expandedIds.has(id) ? this.expandedIds.delete(id) : this.expandedIds.add(id);
  }

  isExpanded(id: number): boolean {
    return this.expandedIds.has(id);
  }
  
  ngAfterViewInit(): void {
    const items = this.host.nativeElement.querySelectorAll('.timeline-item');
    
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(item => io.observe(item));
  }
}
