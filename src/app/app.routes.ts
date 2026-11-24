import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        title: 'Raj Pawar | Machine Learning, Computer Vision & Software Engineer',
        loadComponent: () =>
            import('./components/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'about',
        title: 'About Raj Pawar | ML, Computer Vision & Data Science (TU Dortmund)',
        loadComponent: () =>
            import('./components/about/about.component').then((c) => c.AboutComponent)
    },
    {
        path: 'experience',
        title: 'Experience | Raj Pawar - PartikelART, ADVISORI FTC & Xcellence-IT',
        loadComponent: () =>
            import('./components/experience/experience.component').then((c) => c.ExperienceComponent)
    },
    {
        path: 'projects',
        title: 'Projects | Raj Pawar - Computer Vision, Edge AI & Data Science',
        loadComponent: () =>
            import('./components/projects/projects.component').then((c) => c.ProjectsComponent)
    },
    {
        path: 'project-details/:id',
        title: 'Project | Raj Pawar',
        loadComponent: () =>
            import('./components/project-details/project-details.component').then((c) => c.ProjectDetailsComponent)
    },
    {
        path: 'skills',
        title: 'Technical Skills | Raj Pawar - Python, PyTorch, OpenCV, Angular & Docker',
        loadComponent: () =>
            import('./components/skills/skills.component').then((c) => c.SkillsComponent)
    },
    {
        path: 'contact',
        title: 'Contact Raj Pawar | Dortmund, Germany',
        loadComponent: () =>
            import('./components/contact/contact.component').then((c) => c.ContactComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
