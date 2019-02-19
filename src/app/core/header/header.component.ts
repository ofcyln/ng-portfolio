import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../shared/language.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(public languageService: LanguageService) {}

    ngOnInit() {}
}
