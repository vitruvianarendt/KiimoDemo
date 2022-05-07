import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
  {
    path: 'phone-confirmation',
    loadChildren: () => import('./pages/phone-confirmation/phone-confirmation.module').then(m => m.PhoneConfirmationPageModule)
  },
  {
    path: 'facebook-register',
    loadChildren: () => import('./pages/facebook-register/facebook-register.module').then(m => m.FacebookRegisterPageModule)
  },
  {
    path: 'successful-registration',
    loadChildren: () => import('./pages/successful-registration/successful-registration.module').then(m => m.SuccessfulRegistrationPageModule)
  },
  {
    path: 'all-users',
    loadChildren: () => import('./pages/all-users/all-users.module').then(m => m.AllUsersPageModule)
  },
  {
    path: 'sorted-users',
    loadChildren: () => import('./pages/sorted-users/sorted-users.module').then(m => m.SortedUsersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
