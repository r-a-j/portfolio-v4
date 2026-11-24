import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './data/projects-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'project-details/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PROJECTS.map((project) => ({ id: project.id })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
