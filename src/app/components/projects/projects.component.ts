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
  projects: ProjectDetails[];

  constructor(
    private router: Router,
    private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }

  public viewProject(projectId: string): void {
    this.router.navigate([`/project-details/${projectId}`]);
  }
}
