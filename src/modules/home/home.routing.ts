import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(HomeRoutes);
