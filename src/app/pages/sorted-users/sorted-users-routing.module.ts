import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortedUsersPage } from './sorted-users.page';

const routes: Routes = [
  {
    path: '',
    component: SortedUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortedUsersPageRoutingModule {}
