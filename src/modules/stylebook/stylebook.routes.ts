import { Route } from '@angular/router';
import { StylebookComponent } from './index';

export const StylebookRoutes: Route[] = [
  {
    path: 'stylebook',
    component: StylebookComponent
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
