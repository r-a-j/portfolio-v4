import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/experience-data';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
