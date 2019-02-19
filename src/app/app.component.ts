import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Project, ProjectService } from './shared/project.service';
import { AlertService } from './core/alert/alert.service';
import { IsotopeOptions } from 'ngx-isotopee';
import { modal } from 'tingle.js';
import { filters } from './shared/filters.model';
import { Subscription } from 'rxjs';

export interface FilterType {
    className: string;
    title: string;
}

export interface WorkType {
    title: string;
    id: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public projects: Project[];
    public defaultIsotopeOptions: IsotopeOptions = { filter: '*' };
    public selectedItem: string = '*';
    public modalContainer: modal;
    public isLoaded: boolean = false;
    public isGraphicDesign: boolean = false;
    public filters: FilterType[] = filters;
    public workTypes: WorkType[] = [
        { title: 'mail', id: 0 },
        { title: 'landing-page', id: 1 },
        { title: 'micro', id: 2 },
        { title: 'photoshop', id: 3 },
        { title: 'html', id: 4 },
        { title: 'wordpress', id: 5 },
        { title: 'all', id: 6 },
    ];

    @HostListener('click', ['$event']) public onClick(event: Event): void {
        if (this.isGraphicDesign) {
            event.stopPropagation();
        }
    }

    constructor(
        private projectService: ProjectService,
        private alertService: AlertService,
        public translate: TranslateService,
    ) {}

    ngOnInit(): void {
        this.projectService.getProjects().subscribe(
            (response: Project[]) => {
                this.projects = response;

                this.isLoaded = true;
            },
            (error: Error) => {
                this.alertService.error(
                    `There was an error while getting projects: ${error.message}`,
                );
            },
        );

        this.modalContainer = new modal({
            footer: true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: 'Close',
            cssClass: ['modalContainer'],
        });

        this.workTypes.forEach(
            (item: WorkType): Subscription => {
                return this.translate
                    .stream('main.menu-elements.' + item.title)
                    .subscribe(
                        (translatedText) => (this.workTypes[item.id].title = translatedText),
                    );
            },
        );
    }

    filterIsotope(filterName: string): void {
        this.isGraphicDesign = false;

        this.defaultIsotopeOptions = {
            filter: filterName,
        };

        if (filterName.length > 1) {
            this.selectedItem = filterName.substring(1);
            if (this.selectedItem === 'photoshop') {
                this.isGraphicDesign = true;
            }
        } else {
            this.selectedItem = filterName;
        }
    }

    openModal($event: any, imageLink: string, projectName: string): void {
        event.preventDefault();

        this.modalContainer.setContent(
            `<div title="${projectName}" class="project-image" style="background: url(${imageLink})"></div>`,
        );

        this.modalContainer.open();
    }
}
