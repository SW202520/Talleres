import { Routes } from '@angular/router';
import { SeriesListComponent } from './series/series-list.component';

export const routes: Routes = [
  { path: '', component: SeriesListComponent },
  { path: '**', redirectTo: '' },
];
