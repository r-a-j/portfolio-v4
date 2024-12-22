import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string | null = null;
  projectDetails: ProjectDetails | null = null;
  safeUrl: SafeResourceUrl | null = null;

  projects: Record<ProjectKeys, ProjectDetails> = {
    'particle-segmentation': {
      title: 'Particle Segmentation',
      description: 'Detailed view of particle segmentation using SAM and Mask R-CNN.',
      filePath: 'project-files/placeholder_project_ipynb.html',
    },
    'berlin-marathon': {
      title: 'Berlin Marathon Analysis',
      description: 'Statistical comparisons of Berlin Marathon data.',
      filePath: 'project-files/placeholder_project_ipynb.html',
    },
    'social-scope': {
      title: 'Social Scope',
      description: 'An analysis platform for social trends.',
      filePath: 'project-files/placeholder_project_rmd.html',
    },
  };

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');

    if (this.projectId && this.isValidProjectKey(this.projectId)) {
      this.projectDetails = this.projects[this.projectId];
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectDetails.filePath);
    }
  }

  private isValidProjectKey(key: string): key is ProjectKeys {
    return key in this.projects;
  }
}

// Type Definitions
type ProjectKeys = 'particle-segmentation' | 'berlin-marathon' | 'social-scope';

interface ProjectDetails {
  title: string;
  description: string;
  filePath: string;
}
