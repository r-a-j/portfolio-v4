import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CORE_LANGUAGES, SKILL_GROUPS } from '../../data/skills-data';
import { CoreLanguage, SkillGroup } from '../../shared/types/skill-category';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly embedded = input(false);
  readonly groups: SkillGroup[] = SKILL_GROUPS;
  readonly languages: CoreLanguage[] = CORE_LANGUAGES;
}
