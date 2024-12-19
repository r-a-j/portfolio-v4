import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  greeting: string;

  constructor() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = "Good Morning";
    } else if (hour < 18) {
      this.greeting = "Good Afternoon";
    } else {
      this.greeting = "Good Evening";
    }
  }
}
