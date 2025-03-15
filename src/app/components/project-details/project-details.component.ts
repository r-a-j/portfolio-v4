import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  imports: [CommonModule, MarkdownModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  projectDetails: ProjectDetails | null = null;
  safeUrl: SafeResourceUrl | null = null;
  markdownContent: string = '';
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private projectService: ProjectService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
      const projectId = params.get('id');
      if (projectId) {
        this.loadProjectDetails(projectId);
      }
    });
  }

  private loadProjectDetails(projectId: string): void {
    this.projectDetails = this.projectService.getProjectById(projectId);
    if (this.projectDetails) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.projectDetails.filePath
      );

      if (this.projectDetails.githubReadmeUrl) {
        this.http.get(this.projectDetails.githubReadmeUrl, { responseType: 'text' })
          .subscribe({
            next: (data: string) => this.markdownContent = data,
            error: (error) => console.error('Error loading markdown:', error)
          });
      }
    } else {
      console.error(`Project with ID '${projectId}' not found.`);
    }
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
    this.routeSub.unsubscribe();
  }
}
