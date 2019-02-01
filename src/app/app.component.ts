import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import * as Isotope from 'isotope-layout';
import { Project, ProjectService } from './shared/project.service';
import { AlertService } from './core/alert/alert.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('isotopeContainer') element: ElementRef;

    public isotopeSuit: Isotope;
    public isotopeElement: HTMLElement;
    public projects: Project[];

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
    }

    ngAfterViewInit(): void {
        // this.isotopeElement = this.element.nativeElement;
        //
        // this.isotopeSuit = new Isotope(this.renderer.selectRootElement(this.isotopeElement), {
        //     itemSelector: '.grid-item',
        //     layoutMode: 'fitRows',
        // });
    }
}
