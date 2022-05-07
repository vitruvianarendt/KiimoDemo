import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SortedUsersPageRoutingModule } from './sorted-users-routing.module';

import { SortedUsersPage } from './sorted-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortedUsersPageRoutingModule
  ],
  declarations: [SortedUsersPage]
})
export class SortedUsersPageModule {}
