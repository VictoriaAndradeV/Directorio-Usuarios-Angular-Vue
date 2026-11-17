import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    /* aqui estan los proveedores existentes */
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient() /* deja configurado el cliente HTTP */
  ]
};
