import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CAPABILITY_PILLARS, CORE_LANGUAGES } from '../../data/skills-data';
import { CapabilityPillar, CoreLanguage } from '../../shared/types/skill-category';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly pillars: CapabilityPillar[] = CAPABILITY_PILLARS;
  readonly languages: CoreLanguage[] = CORE_LANGUAGES;
}
