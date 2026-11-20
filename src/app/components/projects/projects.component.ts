import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectDetails } from '../../shared/types/project-details';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private router = inject(Router);
  private projectService = inject(ProjectService);

  readonly featuredOnly = input<boolean>(false);

  readonly allProjects: ProjectDetails[] = this.projectService.getProjects();
  readonly categories: string[] = Array.from(
    new Set(this.allProjects.map((p) => p.category))
  ).sort();
  readonly years: number[] = Array.from(
    new Set(this.allProjects.map((p) => p.year))
  ).sort((a, b) => b - a);
  readonly languages: string[] = Array.from(
    new Set(this.allProjects.map((p) => p.language))
  ).sort();

  readonly searchQuery = signal('');
  readonly activeCategory = signal('');
  readonly activeYear = signal<number | ''>('');
  readonly activeLanguage = signal('');

  readonly hasActiveFilters = computed(
    () =>
      Boolean(
        this.searchQuery().trim() ||
          this.activeCategory() ||
          this.activeYear() ||
          this.activeLanguage()
      )
  );

  readonly filteredProjects = computed(() => {
    if (this.featuredOnly()) {
      return this.allProjects.slice(0, 3);
    }

    const q = this.searchQuery().trim().toLowerCase();
    const cat = this.activeCategory();
    const yr = this.activeYear();
    const lang = this.activeLanguage();

    return this.allProjects.filter((p) => {
      if (cat && p.category !== cat) {
        return false;
      }
      if (yr && p.year !== yr) {
        return false;
      }
      if (lang && p.language !== lang) {
        return false;
      }
      if (q) {
        const haystack = [
          p.title,
          p.description,
          p.category,
          p.language,
          ...p.techStack,
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      }
      return true;
    });
  });

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }

  onYearChange(event: Event): void {
    const raw = (event.target as HTMLSelectElement).value;
    this.activeYear.set(raw ? Number(raw) : '');
  }

  onLanguageChange(event: Event): void {
    const raw = (event.target as HTMLSelectElement).value;
    this.activeLanguage.set(raw);
  }

  filterByCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  resetFilters(): void {
    this.searchQuery.set('');
    this.activeCategory.set('');
    this.activeYear.set('');
    this.activeLanguage.set('');
  }

  viewProject(projectId: string): void {
    this.router.navigate([`/project-details/${projectId}`]);
  }
}
