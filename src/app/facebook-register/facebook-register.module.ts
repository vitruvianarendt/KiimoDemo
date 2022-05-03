import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebookRegisterPageRoutingModule } from './facebook-register-routing.module';

import { FacebookRegisterPage } from './facebook-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacebookRegisterPageRoutingModule
  ],
  declarations: [FacebookRegisterPage]
})
export class FacebookRegisterPageModule {}
