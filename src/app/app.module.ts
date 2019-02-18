import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { IsotopeModule } from 'ngx-isotopee';
import { LoadingComponent } from './core/loading/loading.component';

@NgModule({
    declarations: [AppComponent, LoadingComponent],
    imports: [BrowserModule, HttpClientModule, CoreModule, IsotopeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
