import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import { SITE_URL, SeoService } from '../../services/seo.service';
import { ProjectDetails } from '../../shared/types/project-details';
import { MarkdownViewerComponent } from '../markdown-viewer/markdown-viewer.component';
import { ProjectCaseStudyComponent } from '../project-case-study/project-case-study.component';
import { ProjectShowcaseComponent } from '../project-showcase/project-showcase.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [MarkdownViewerComponent, ProjectShowcaseComponent, ProjectCaseStudyComponent],
  templateUrl: './project-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  private projectService = inject(ProjectService);
  private http = inject(HttpClient);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  projectDetails: ProjectDetails | null = null;
  safeUrl: SafeResourceUrl | null = null;
  markdownContent = '';
  private routeSub!: Subscription;
  private httpSub?: Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
      const projectId = params.get('id');
      if (projectId) {
        this.loadProjectDetails(projectId);
      }
    });
  }

  private loadProjectDetails(projectId: string): void {
    this.httpSub?.unsubscribe();
    this.markdownContent = '';
    this.projectDetails = this.projectService.getProjectById(projectId);
    if (this.projectDetails) {
      const p = this.projectDetails;
      const pageUrl = `${SITE_URL}/project-details/${p.id}`;
      const imageUrl = p.thumbnail ? `${SITE_URL}/${p.thumbnail.replace(/^\//, '')}` : undefined;
      this.seo.update({
        title: `${p.title} | Raj Pawar`,
        description: `${p.description} Project by Raj Pawar (${p.techStack.slice(0, 5).join(', ')}).`,
        path: `/project-details/${p.id}`,
        image: imageUrl,
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareSourceCode',
              name: p.title,
              description: p.description,
              url: pageUrl,
              image: imageUrl,
              programmingLanguage: p.language,
              keywords: p.techStack.join(', '),
              ...(p.githubLink ? { codeRepository: p.githubLink } : {}),
              author: { '@id': `${SITE_URL}/#person` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Raj Pawar', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
                { '@type': 'ListItem', position: 3, name: p.title, item: pageUrl },
              ],
            },
          ],
        },
      });

      if (
        isPlatformBrowser(this.platformId) &&
        !p.showcase &&
        !p.caseStudy &&
        p.githubReadmeUrl
      ) {
        this.fetchReadme(p.githubReadmeUrl);
      }
    } else {
      this.seo.update({
        title: 'Project Not Found | Raj Pawar',
        description: 'The requested project could not be found on Raj Pawar’s portfolio.',
        path: `/project-details/${projectId}`,
        robots: 'noindex, follow',
      });
      console.error(`Project with ID '${projectId}' not found.`);
    }
    this.cdr.markForCheck();
  }

  public loadReadmeIfNeeded(): void {
    const url = this.projectDetails?.githubReadmeUrl;
    if (!url || this.markdownContent || !isPlatformBrowser(this.platformId)) return;
    this.fetchReadme(url);
  }

  private fetchReadme(url: string): void {
    this.httpSub?.unsubscribe();
    this.httpSub = this.http.get(url, { responseType: 'text' })
      .subscribe({
        next: (data: string) => {
          this.markdownContent = data;
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Error loading markdown:', error);
          this.markdownContent = 'Failed to load project details from GitHub.';
          this.cdr.markForCheck();
        }
      });
  }

  public goBack(): void {
    this.router.navigate(['/projects']);
  }

  public goToPrevProject(): void {
    const projects = this.projectService.getProjects();
    const currentIndex = projects.findIndex(p => p.id === this.projectDetails?.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      const prevProject = projects[prevIndex];
      this.router.navigate([`/project-details/${prevProject.id}`]);
    }
  }

  public goToNextProject(): void {
    const projects = this.projectService.getProjects();
    const currentIndex = projects.findIndex(p => p.id === this.projectDetails?.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % projects.length;
      const nextProject = projects[nextIndex];
      this.router.navigate([`/project-details/${nextProject.id}`]);
    }
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.httpSub?.unsubscribe();
  }
}
