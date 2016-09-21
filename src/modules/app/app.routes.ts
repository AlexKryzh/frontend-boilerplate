import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPageNotFoundComponent } from './app.pagenotfound.component.ts';
import { HomeRoutes } from '../home/index';
import { StylebookRoutes } from '../stylebook/index';

const routes: Routes = [
    ...StylebookRoutes,
    ...HomeRoutes,
    { path: '**', component: AppPageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
