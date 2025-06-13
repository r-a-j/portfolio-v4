import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillCategory } from '../../shared/types/skill-category';
import { SKILLS } from '../../data/skills-data';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = SKILLS;
}
