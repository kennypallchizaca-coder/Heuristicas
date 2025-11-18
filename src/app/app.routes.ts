import { Routes } from '@angular/router';
import { InterfazPage } from './features/interfaz-page/interfaz-page';
import { heuristicaRoutes } from './features/heuristicas/heuristica.routes';

export const routes: Routes = [
  {
    path: '',
    component: InterfazPage,
  },
  {
    path: 'heuristica',
    children: heuristicaRoutes,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
