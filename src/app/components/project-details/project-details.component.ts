import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../services/project.service';
import { ProjectDetails } from '../../shared/types/project-details';
import { MarkdownModule } from 'ngx-markdown';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './project-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private projectService = inject(ProjectService);
  private http = inject(HttpClient);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

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
    this.markdownContent = '';
    this.projectDetails = this.projectService.getProjectById(projectId);
    if (this.projectDetails) {
      if (this.projectDetails.githubReadmeUrl) {
        this.httpSub?.unsubscribe();
        this.httpSub = this.http.get(this.projectDetails.githubReadmeUrl, { responseType: 'text' })
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
    } else {
      console.error(`Project with ID '${projectId}' not found.`);
    }
    this.cdr.markForCheck();
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
