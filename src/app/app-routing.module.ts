import { Routes, RouterModule } from '@angular/router';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { EditBadgeComponent } from './edit-badge/edit-badge.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FullComponent } from './layouts/full/full.component';
import { FrontOfficeComponent } from './front-office/front-office.component';

export const Approutes: Routes = [
 {
    path: '',
    component: FullComponent,
    children: [
     
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
     
    ]
  },
  { path: 'badge', component: BadgeListComponent 
  },
  { path: 'badge/edit/:id', component: EditBadgeComponent 
  },

  //saif
  {path:'front',component:FrontOfficeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  
  {
    path: '**',
    redirectTo: '/starter'
  },
  
];
