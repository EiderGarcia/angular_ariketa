import { Routes } from '@angular/router';
import { Taula } from './taula/taula';

export const routes: Routes = [

     {
    path: 'events/:type',
    component: Taula
  },
  {
    path: '',
    redirectTo: 'events/kontzertuak',
    pathMatch: 'full'
  }
    
];
