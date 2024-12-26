import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/experience-data';
import { Experience } from '../../shared/types/experience-details';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public experiences:Experience[] = EXPERIENCES;
  public expandedMedia: { [key: string]: number } = {};

  public toggleMediaView(index: number, experienceId: number): void {
    const key = `${experienceId}-${index}`;
    if (this.expandedMedia[key] !== undefined) {
      delete this.expandedMedia[key];
    } else {
      this.expandedMedia[key] = index;
    }
  }

  public isExpanded(experienceId: number, index: number): boolean {
    const key = `${experienceId}-${index}`;
    return this.expandedMedia[key] !== undefined;
  }
}
