import { Component, HostListener, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public isMenuOpen = signal(false);

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    const innerWidth = (event.target as Window).innerWidth;
    if (innerWidth >= 768 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  public toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  public closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
