import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookRegisterPage } from './facebook-register.page';

const routes: Routes = [
  {
    path: '',
    component: FacebookRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookRegisterPageRoutingModule {}
