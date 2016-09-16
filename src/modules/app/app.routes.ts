import { Routes } from '@angular/router';

import { HomeRoutes } from '../home/index';
import { StylebookRoutes } from '../stylebook/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...StylebookRoutes
];
