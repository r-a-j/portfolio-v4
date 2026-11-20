import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { RecognitionComponent } from '../recognition/recognition.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ProjectsComponent,
    RecognitionComponent,
    ExperienceComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
