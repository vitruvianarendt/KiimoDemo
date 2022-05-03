import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'phone-confirmation',
    loadChildren: () => import('./phone-confirmation/phone-confirmation.module').then( m => m.PhoneConfirmationPageModule)
  },
  {
    path: 'facebook-register',
    loadChildren: () => import('./facebook-register/facebook-register.module').then( m => m.FacebookRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
