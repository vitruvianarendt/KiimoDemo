import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneConfirmationPage } from './phone-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneConfirmationPageRoutingModule {}
