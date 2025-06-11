import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectDetails } from '../../shared/types/project-details';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  allProjects: ProjectDetails[];
  filteredProjects: ProjectDetails[];

  // filter lists
  categories: string[] = [];
  years: number[] = [];
  languages: string[] = [];

  // active filters
  activeCategory = '';
  activeYear: number | '' = '';
  activeLanguage = '';

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) {
    this.allProjects = this.projectService.getProjects();
    this.filteredProjects = [];
  }

  ngOnInit() {
    // compute unique filter lists
    const cats = new Set<string>();
    const yrs = new Set<number>();
    const langs = new Set<string>();

    this.allProjects.forEach(p => {
      cats.add(p.category);
      yrs.add(p.year);
      langs.add(p.language);
    });

    this.categories = Array.from(cats).sort();
    this.years = Array.from(yrs).sort((a, b) => b - a);
    this.languages = Array.from(langs).sort();

    this.applyFilters();
  }

  filterByCategory(cat: string) {
    this.activeCategory = cat;
    this.applyFilters();
  }
  filterByYear(year: number | '') {
    this.activeYear = year;
    this.applyFilters();
  }
  filterByLanguage(lang: string) {
    this.activeLanguage = lang;
    this.applyFilters();
  }

  private applyFilters() {
    this.filteredProjects = this.allProjects.filter(p => {
      return (
        (!this.activeCategory || p.category === this.activeCategory) &&
        (!this.activeYear || p.year === this.activeYear) &&
        (!this.activeLanguage || p.language === this.activeLanguage)
      );
    });
  }

  public viewProject(projectId: string): void {
    this.router.navigate([`/project-details/${projectId}`]);
  }

  public formatTags(tags: string[]): string {
    return tags.map(t => `#${t}`).join(' ');
  }
}
