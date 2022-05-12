import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ListPartnerComponent } from './list-partner/list-partner.component';

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
     
    ]

    
  },
 

];
