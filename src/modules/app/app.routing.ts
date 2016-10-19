import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPageNotFoundComponent } from './app.pagenotfound.component';
import { HomeRoutes } from '../home/index';
import { ItemsRoutes } from '../items/index';
import { StylebookRoutes } from '../stylebook/index';

const routes: Routes = [
    ...StylebookRoutes,
    ...ItemsRoutes,
    ...HomeRoutes,
    { path: '**', component: AppPageNotFoundComponent }
];

export const AppRoutingProviders: any[] = [

];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);