import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Raj Pawar | ML, Computer Vision & Full-Stack Applied AI Engineer',
        loadComponent: () =>
            import('./components/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'about',
        title: 'About | Raj Pawar',
        loadComponent: () =>
            import('./components/about/about.component').then((c) => c.AboutComponent)
    },
    {
        path: 'experience',
        title: 'Experience | Raj Pawar',
        loadComponent: () =>
            import('./components/experience/experience.component').then((c) => c.ExperienceComponent)
    },
    {
        path: 'projects',
        title: 'Projects | Raj Pawar',
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
        title: 'Skills | Raj Pawar',
        loadComponent: () =>
            import('./components/skills/skills.component').then((c) => c.SkillsComponent)
    },
    {
        path: 'contact',
        title: 'Contact | Raj Pawar',
        loadComponent: () =>
            import('./components/contact/contact.component').then((c) => c.ContactComponent)
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
