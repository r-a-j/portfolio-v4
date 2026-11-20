import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownRenderService } from '../../services/markdown-render.service';

@Component({
  selector: 'app-markdown-viewer',
  standalone: true,
  templateUrl: './markdown-viewer.component.html',
  styleUrl: './markdown-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownViewerComponent implements OnChanges {
  private readonly renderer = inject(MarkdownRenderService);
  private readonly sanitizer = inject(DomSanitizer);

  @Input() content = '';
  @Input() sourceUrl = '';

  renderedHtml: SafeHtml = '';
  zoomImageSrc: string | null = null;
  zoomImageAlt = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content'] || changes['sourceUrl']) {
      const cleanHtml = this.renderer.render(this.content, this.sourceUrl);
      this.renderedHtml = this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
    }
  }

  onContentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // 1. Copy button on fenced code blocks
    const copyBtn = target.closest('[data-copy-code]') as HTMLButtonElement | null;
    if (copyBtn) {
      const codeEl = copyBtn.closest('.md-code-block')?.querySelector('pre code');
      const codeText = codeEl?.textContent ?? '';
      if (codeText && navigator.clipboard) {
        navigator.clipboard.writeText(codeText).then(() => {
          copyBtn.textContent = 'Copied';
          copyBtn.classList.add('is-copied');
          window.setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('is-copied');
          }, 1800);
        }).catch(() => {
          copyBtn.textContent = 'Failed';
        });
      }
      return;
    }

    // 2. Click-to-zoom on README images/plots
    const imgEl = target.closest('img[data-zoom-src]') as HTMLImageElement | null;
    if (imgEl) {
      const src = imgEl.getAttribute('data-zoom-src') || imgEl.src;
      if (src) {
        this.zoomImageSrc = src;
        this.zoomImageAlt = imgEl.alt || 'README figure preview';
      }
      return;
    }

    // 3. Smooth scroll for in-page #anchor links
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (anchor) {
      const hash = anchor.getAttribute('href')?.slice(1);
      if (hash) {
        const heading = document.getElementById(decodeURIComponent(hash));
        if (heading) {
          event.preventDefault();
          heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }

  closeZoom(): void {
    this.zoomImageSrc = null;
    this.zoomImageAlt = '';
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.zoomImageSrc) {
      this.closeZoom();
    }
  }
}
