import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export const SITE_URL = 'https://rajpawar.in';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/recognition/tu-award-team.webp`;

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  robots?: string;
  jsonLd?: Record<string, unknown> | null;
}

const ROUTE_SEO: Record<string, Omit<SeoConfig, 'path'>> = {
  '/': {
    title: 'Raj Pawar | Machine Learning, Computer Vision & Software Engineer',
    description:
      'Raj Pawar: Machine Learning, Computer Vision & Software Engineer in Dortmund. M.Sc. Data Science at TU Dortmund, 1st Place TU Start-up Award 2025.',
    type: 'profile',
  },
  '/about': {
    title: 'About Raj Pawar | ML, Computer Vision & Data Science (TU Dortmund)',
    description:
      'About Raj Pawar: M.Sc. Data Science at TU Dortmund, former PartikelART engineer, TU Start-up Award 2025 winner, guest lecturer, and references.',
    type: 'profile',
  },
  '/experience': {
    title: 'Experience | Raj Pawar - PartikelART, ADVISORI FTC & Xcellence-IT',
    description:
      'Engineering experience of Raj Pawar: PartikelART (VDA 19.1 optical inspection, PyTorch, OpenCV), ADVISORI FTC, and Xcellence-IT.',
    type: 'website',
  },
  '/projects': {
    title: 'Projects | Raj Pawar - Computer Vision, Edge AI & Data Science',
    description:
      'Projects by Raj Pawar: VDA 19.1 particle segmentation, Kosh Android edge AI (LiteRT), Social Scope, CineScope, and Bayesian modeling.',
    type: 'website',
  },
  '/skills': {
    title: 'Technical Skills | Raj Pawar - Python, PyTorch, OpenCV, Angular & Docker',
    description:
      'Technical skills of Raj Pawar: Python, PyTorch, OpenCV, SAM 2.1, ONNX, TypeScript, Angular, NestJS, Spring Boot, Linux, and Docker.',
    type: 'website',
  },
  '/contact': {
    title: 'Contact Raj Pawar | Dortmund, Germany',
    description:
      'Contact Raj Pawar (er.rajpawar@gmail.com) in Dortmund, Germany for Machine Learning, Computer Vision, and Software Engineering roles.',
    type: 'website',
  },
};

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private initialized = false;

  init(): void {
    if (this.initialized) return;
    this.initialized = true;

    this.applyForUrl(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.applyForUrl(event.urlAfterRedirects);
      });
  }

  private applyForUrl(rawUrl: string): void {
    const cleanPath = this.normalizePath(rawUrl);
    if (cleanPath.startsWith('/project-details/')) {
      return;
    }

    const routeConfig = ROUTE_SEO[cleanPath] ?? ROUTE_SEO['/'];
    this.update({
      ...routeConfig,
      path: cleanPath,
      jsonLd: null,
    });
  }

  update(config: SeoConfig): void {
    const cleanPath = this.normalizePath(config.path);
    const canonicalUrl = cleanPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;
    const imageUrl = this.toAbsoluteUrl(config.image ?? DEFAULT_OG_IMAGE);
    const ogType = config.type ?? 'website';
    const description = this.clampDescription(config.description, 155);

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'robots',
      content: config.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1',
    });

    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });

    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    this.setCanonicalLink(canonicalUrl);
    this.setRouteJsonLd(config.jsonLd ?? null);
  }

  private clampDescription(text: string, maxLength: number): string {
    const normalized = text.replace(/\s+/g, ' ').trim();
    if (normalized.length <= maxLength) {
      return normalized;
    }
    const cut = normalized.slice(0, maxLength - 3);
    const lastSpace = cut.lastIndexOf(' ');
    return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:\s]+$/, '')}...`;
  }

  private normalizePath(url: string): string {
    const withoutQuery = url.split(/[?#]/)[0] || '/';
    if (withoutQuery === '/home' || withoutQuery === '') {
      return '/';
    }
    return withoutQuery.length > 1 && withoutQuery.endsWith('/')
      ? withoutQuery.slice(0, -1)
      : withoutQuery;
  }

  private toAbsoluteUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    const clean = url.startsWith('/') ? url : `/${url}`;
    return `${SITE_URL}${clean}`;
  }

  private setCanonicalLink(href: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setRouteJsonLd(schema: Record<string, unknown> | null): void {
    const existing = this.doc.getElementById('rp-route-schema');
    if (!schema) {
      existing?.remove();
      return;
    }

    const script = existing ?? this.doc.createElement('script');
    script.id = 'rp-route-schema';
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schema);
    if (!existing) {
      this.doc.head.appendChild(script);
    }
  }
}
