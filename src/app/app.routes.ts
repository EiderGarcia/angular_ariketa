import { Routes } from '@angular/router';
import { Taula } from './taula/taula';
import { EventDetail } from './event-detail/event-detail';

export const routes: Routes = [

    
  {
    path: 'events/:type/:id',
    component: EventDetail
  },
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
