import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
    type: string;
    nameEN: string;
    nameTR: string;
    urlLink: string;
    imageLink: string;
}

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    public getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>('../../assets/api/projects.json');
    }
}
