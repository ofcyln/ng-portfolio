import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

import { Project, ProjectService } from './shared/project.service';
import { AlertService } from './core/alert/alert.service';
import { IsotopeOptions } from 'ngx-isotopee';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    public projects: Project[];
    public defaultIsotopeOptions: IsotopeOptions;
    public selectedItem: string = '*';

    constructor(
        private renderer: Renderer2,
        private projectService: ProjectService,
        private alertService: AlertService,
    ) {}

    ngOnInit(): void {
        this.projectService.getProjects().subscribe(
            (response: Project[]) => {
                this.projects = response;
            },
            (error: Error) => {
                this.alertService.error(
                    `There was an error while getting projects: ${error.message}`,
                );
            },
        );

        this.defaultIsotopeOptions = {
            filter: '*',
        };
    }

    ngAfterViewInit(): void {}

    filterIsotope(filterName: string): void {
        this.defaultIsotopeOptions = {
            filter: filterName,
        };

        if (filterName.length > 1) {
            this.selectedItem = filterName.substring(1);
        } else {
            this.selectedItem = filterName;
        }
    }
}
