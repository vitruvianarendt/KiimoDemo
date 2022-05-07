import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessfulRegistrationPageRoutingModule } from './successful-registration-routing.module';

import { SuccessfulRegistrationPage } from './successful-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessfulRegistrationPageRoutingModule
  ],
  declarations: [SuccessfulRegistrationPage]
})
export class SuccessfulRegistrationPageModule {}
