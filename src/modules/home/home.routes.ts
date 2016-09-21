import { Route } from '@angular/router';
import { HomeComponent } from './index';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

// const appRoutes: Routes = [
//   { path: 'hero/:id', component: HeroDetailComponent },
//   { path: 'crisis-center', component: CrisisCenterComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: {
//       title: 'Heroes List'
//     }
//   },
//   { path: '', component: HomeComponent },
//   { path: '**', component: PageNotFoundComponent }
// ];
