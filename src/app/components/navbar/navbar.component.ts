import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ABOUT_CONTENT } from '../../data/about-data';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CvModalComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './navbar.component.scss',
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class NavbarComponent {
  readonly isMenuOpen = signal(false);
  readonly showCVModal = signal(false);
  readonly aboutContent = ABOUT_CONTENT;

  readonly navItems = [
    { label: 'Home', route: '/home' },
    { label: 'Work', route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Capabilities', route: '/skills' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  onResize(event: Event): void {
    const innerWidth = (event.target as Window).innerWidth;
    if (innerWidth >= 768 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
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
