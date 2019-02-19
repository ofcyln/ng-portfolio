import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AlertModule } from './alert/alert.module';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { StorageService } from '../shared/storage.service';
import { LanguageService } from '../shared/language.service';

@NgModule({
    declarations: [HeaderComponent, NotFoundComponent],
    imports: [CommonModule, AlertModule, AppRoutingModule],
    exports: [HeaderComponent, AlertModule, AppRoutingModule],
    providers: [StorageService, LanguageService],
})
export class CoreModule {}
