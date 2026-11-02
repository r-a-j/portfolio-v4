
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SkillCategory } from '../../shared/types/skill-category';
import { SKILLS } from '../../data/skills-data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = SKILLS;
}
