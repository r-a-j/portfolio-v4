import { Injectable } from '@angular/core';
import { ProjectDetails } from '../shared/types/project-details';
import { PROJECTS } from '../data/projects-data';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private readonly projects: ProjectDetails[] = PROJECTS;

    public getProjects(): ProjectDetails[] {
        return this.projects;
    }

    public getProjectById(id: string): ProjectDetails | null {
        return this.projects.find((project) => project.id === id) || null;
    }
}
