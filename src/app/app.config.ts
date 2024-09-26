import {ApplicationConfig, importProvidersFrom, Inject, Injectable, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {ConfirmationService, MessageService} from "primeng/api";
import {provideHttpClient} from "@angular/common/http";
import {provideMarkdown} from "ngx-markdown";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideMarkdown(),
    MessageService,
    ConfirmationService,
    provideHttpClient(),
    // importProvidersFrom(HttpClientModule)
  ]
};
