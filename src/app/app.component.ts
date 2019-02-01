import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import * as Isotope from 'isotope-layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('isotopeContainer') element: ElementRef;

    public isotopeSuit: Isotope;
    public isotopeElement: HTMLElement;

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.isotopeElement = this.element.nativeElement;

        this.isotopeSuit = new Isotope(this.renderer.selectRootElement(this.isotopeElement), {
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        });
    }
}
