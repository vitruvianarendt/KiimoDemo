import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessfulRegistrationPage } from './successful-registration.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessfulRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessfulRegistrationPageRoutingModule {}
