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
  readonly projects = [
    {
      id: 'social-scope',
      title: 'Social Scope',
      description: 'Generate images using diffusion models',
      thumbnail: 'portfolio/social-scope/social-scope-2.webp',
      githubLink: 'https://github.com/r-a-j/Social-Scope',
    },
    {
      id: 'metal-nonmetal-classification',
      title: 'Metal / Non-metal Image Classification',
      description: 'Industry use case - PartikelART Solutions GmbH',
      thumbnail: 'portfolio/met-nmet-classifier/met-nmet-classifier-2.webp',
      githubLink: 'https://github.com/r-a-j/IDS-Image-Classification',
    },
    {
      id: 'regression-analysis',
      title: 'Regression Analysis',
      description: 'Modeled height using human body measurements',
      thumbnail: 'portfolio/regression-analysis/regression-analysis.webp',
      githubLink: 'https://github.com/r-a-j/Regression-Analysis',
    },
    {
      id: 'comparison-multiple-distributions',
      title: 'Comparison of Multiple Distributions',
      description: 'Analysed swimmer timings using ANOVA and adjusted pairwise tests',
      thumbnail: 'portfolio/comparing multiple distributions/comparing-multiple-distributions.webp',
      githubLink: 'https://github.com/r-a-j/Comparison-of-multiple-distributions',
    },
    {
      id: 'descriptive-analysis',
      title: 'Descriptive Analysis',
      description: 'Analysed rising life expectancies and strong correlations between mortality and birth life expectancy',
      thumbnail: 'portfolio/descriptive-analysis/descriptive-analysis.webp',
      githubLink: 'https://github.com/r-a-j/Descriptive-Analysis',
    },
    {
      id: 'eye-tracking-fixations',
      title: 'Eye Tracking (Fixations)',
      description: 'Ongoing...',
      thumbnail: 'portfolio/eye-tracking/eye-tracking.webp',
      githubLink: 'https://github.com/r-a-j/Eye-Tracking-Fixations',
    },
    {
      id: 'unspecified',
      title: 'XXXX XXXXXXX',
      description: 'Ongoing...',
      thumbnail: 'portfolio/unspecified.webp',
      githubLink: 'javascript:void(0)',
    },
    {
      id: 'applied-bayesian-data-analysis',
      title: 'Applied Bayesian Data Analysis',
      description: 'Ongoing...',
      thumbnail: 'portfolio/applied-bayesian-data-analysis/applied-bayesian-data-analysis.jpg',
      githubLink: 'https://github.com/r-a-j/Applied-Bayesian-Data-Analysis',
    },
  ];

  constructor(private router: Router) { }

  public viewProject(projectId: string): void {
    this.router.navigate([`/project-details/${projectId}`]);
  }
}
