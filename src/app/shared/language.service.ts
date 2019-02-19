import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StorageService } from './storage.service';

@Injectable()
export class LanguageService {
    public languagePreference: string = 'en';

    constructor(public translate: TranslateService, private storageService: StorageService) {
        translate.addLangs(['en', 'tr']);

        translate.setDefaultLang(this.storageService.getItem('prefered-language') || 'en');

        translate.use(this.storageService.getItem('prefered-language') || 'en');

        this.storageService.setItem(
            'prefered-language',
            this.storageService.getItem('prefered-language') || this.languagePreference,
        );
    }

    changeLanguage(language: string) {
        this.languagePreference = language;

        this.translate.use(language);

        this.storageService.setItem('prefered-language', language);
    }
}
