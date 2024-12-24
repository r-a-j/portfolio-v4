import { Injectable } from '@angular/core';
import { ProjectDetails } from '../shared/types/project-details';
import { PROJECTS } from '../data/projects-data';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private readonly projects: ProjectDetails[] = PROJECTS;

    getProjects(): ProjectDetails[] {
        return this.projects;
    }

    getProjectById(id: string): ProjectDetails | null {
        return this.projects.find((project) => project.id === id) || null;
    }
}
