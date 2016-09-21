import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StylebookComponent } from './stylebook.component';

export const StylebookRoutes: Routes = [
  {
    path: 'stylebook',
    component: StylebookComponent
  }
];

export const StylebookRouting: ModuleWithProviders = RouterModule.forChild(StylebookRoutes);