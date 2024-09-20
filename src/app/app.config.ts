import {ApplicationConfig, importProvidersFrom, Inject, Injectable, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    MessageService,
    provideHttpClient(),
    // importProvidersFrom(HttpClientModule)
  ]
};
