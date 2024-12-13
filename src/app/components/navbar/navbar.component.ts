import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public isMenuOpen: Boolean = false;
  public innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    this.innerWidth = (event.target as Window).innerWidth;
    if (this.innerWidth >= 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }
}
