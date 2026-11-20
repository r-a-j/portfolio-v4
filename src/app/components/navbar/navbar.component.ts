import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ABOUT_CONTENT } from '../../data/about-data';
import { ThemeId, ThemeService } from '../../services/theme.service';
import { BrandMarkComponent } from '../brand-mark/brand-mark.component';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CvModalComponent, BrandMarkComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './navbar.component.scss',
  host: {
    '(window:resize)': 'onResize($event)',
    '(document:click)': 'onDocumentClick($event)',
    '(window:keydown.escape)': 'closePopovers()',
  },
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  readonly isMenuOpen = signal(false);
  readonly isThemeMenuOpen = signal(false);
  readonly showCVModal = signal(false);
  readonly aboutContent = ABOUT_CONTENT;

  readonly navItems = [
    { label: 'Home', route: '/home' },
    { label: 'Projects', route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Skills', route: '/skills' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  onResize(event: Event): void {
    const innerWidth = (event.target as Window).innerWidth;
    if (innerWidth >= 768 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  onDocumentClick(event: MouseEvent): void {
    if (!this.isThemeMenuOpen()) return;
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.theme-picker')) {
      this.isThemeMenuOpen.set(false);
    }
  }

  closePopovers(): void {
    this.isThemeMenuOpen.set(false);
  }

  toggleThemeMenu(event: Event): void {
    event.stopPropagation();
    this.isThemeMenuOpen.update((open) => !open);
  }

  selectTheme(id: ThemeId): void {
    this.themeService.setTheme(id);
    this.isThemeMenuOpen.set(false);
  }

  toggleLightDark(): void {
    this.themeService.toggleLightDark();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  openCV(): void {
    this.closeMenu();
    if (window.innerWidth <= 768) {
      window.open(this.aboutContent.pdfPath, '_blank', 'noopener,noreferrer');
    } else {
      this.showCVModal.set(true);
    }
  }

  closeCV(): void {
    this.showCVModal.set(false);
  }
}
