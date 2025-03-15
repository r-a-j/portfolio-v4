import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../services/project.service';
import { ProjectDetails } from '../../shared/types/project-details';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails: ProjectDetails | null = null;
  safeUrl: SafeResourceUrl | null = null;
  markdownContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private projectService: ProjectService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');

    if (projectId) {
      this.projectDetails = this.projectService.getProjectById(projectId);

      if (this.projectDetails) {
        // // For rendering exported html or rmd file
        // this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        //   this.projectDetails.filePath
        // );

        if (this.projectDetails.githubReadmeUrl) {
          this.http.get(this.projectDetails.githubReadmeUrl, { responseType: 'text' })
            .subscribe({
              next: (data: string) => (this.markdownContent = data),
              error: (error) => console.error('Error loading markdown:', error)
            });
        }
      } else {
        console.error(`Project with ID '${projectId}' not found.`);
      }
    }
  }

  public goBack(): void {
    this.router.navigate(['/projects']);
  }
}
