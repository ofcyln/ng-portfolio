import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Project, ProjectService } from './shared/project.service';
import { AlertService } from './core/alert/alert.service';
import { IsotopeOptions } from 'ngx-isotopee';
import { modal } from 'tingle.js';
import { filters } from './shared/filters.model';
import { StorageService } from './shared/storage.service';

export interface FilterTypes {
    className: string;
    title: string;
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
    public filters: FilterTypes[] = filters;
    public languagePreference: string = 'en';

    @HostListener('click', ['$event']) public onClick(event: Event): void {
        if (this.isGraphicDesign) {
            event.stopPropagation();
        }
    }

    constructor(
        private projectService: ProjectService,
        private alertService: AlertService,
        public translate: TranslateService,
        private storageService: StorageService,
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
