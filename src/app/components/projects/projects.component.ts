import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      id: 'particle-segmentation',
      title: 'Particle Segmentation',
      description: 'Segmentation and classification of particles using SAM and Mask R-CNN.',
      thumbnail: 'project-files/1.jpg',
      githubLink: 'https://github.com/r-a-j/Social-Scope'
    },
    {
      id: 'berlin-marathon',
      title: 'Berlin Marathon Analysis',
      description: 'Statistical analysis of Berlin Marathon data.',
      thumbnail: 'project-files/2.jpg',
      githubLink: 'https://github.com/r-a-j/IDS-Image-Classification'
    },
    {
      id: 'social-scope',
      title: 'Social Scope',
      description: 'A platform to analyze social data trends.',
      thumbnail: 'project-files/3.jpg',
      githubLink: 'https://github.com/r-a-j/Regression-Analysis'
    },
  ];

  constructor(private router: Router) { }

  navigateToProject(id: string): void {
    this.router.navigate([`/project-details/${id}`]); // Dynamically navigate using the project ID
  }
}
