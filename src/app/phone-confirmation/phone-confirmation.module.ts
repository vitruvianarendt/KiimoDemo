import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneConfirmationPageRoutingModule } from './phone-confirmation-routing.module';

import { PhoneConfirmationPage } from './phone-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneConfirmationPageRoutingModule
  ],
  declarations: [PhoneConfirmationPage]
})
export class PhoneConfirmationPageModule {}
