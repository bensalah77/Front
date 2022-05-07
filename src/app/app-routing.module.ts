import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { EditBadgeComponent } from './edit-badge/edit-badge.component';

import { FullComponent } from './layouts/full/full.component';
import { VoteBadgecomponentComponent } from './vote-badgecomponent/vote-badgecomponent.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  { path: 'badge', component: BadgeListComponent 
  },
  { path: 'badge/vote/:id', component: VoteBadgecomponentComponent 
  },
  { path: 'badge/edit/:id', component: EditBadgeComponent 
  },
  
  {
    path: '**',
    redirectTo: '/starter'
  }
];
