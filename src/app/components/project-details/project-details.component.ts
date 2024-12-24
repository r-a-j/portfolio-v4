import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectDetails } from '../../shared/types/project-details';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails: ProjectDetails | null = null;
  safeUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');

    if (projectId) {
      this.projectDetails = this.projectService.getProjectById(projectId);

      if (this.projectDetails) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.projectDetails.filePath
        );
      } else {
        console.error(`Project with ID '${projectId}' not found.`);
      }
    }
  }
}