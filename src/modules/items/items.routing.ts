import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';

export const ItemsRoutes: Routes = [
  {
    path: 'items',
    component: ItemsComponent
  }
];

export const ItemsRouting: ModuleWithProviders = RouterModule.forChild(ItemsRoutes);