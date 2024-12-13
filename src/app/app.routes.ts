import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: "Home",
        loadComponent: () =>
            import('./components/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'about',
        title: "About",
        loadComponent: () =>
            import('./components/about/about.component').then((c) => c.AboutComponent)
    },
    {
        path: 'projects',
        title: "Projects",
        loadComponent: () =>
            import('./components/projects/projects.component').then((c) => c.ProjectsComponent)
    },
    {
        path: 'contact',
        title: "Contact",
        loadComponent: () =>
            import('./components/contact/contact.component').then((c) => c.ContactComponent)
    }
];
