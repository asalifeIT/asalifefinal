import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduancateringPageRoutingModule } from './aduancatering-routing.module';

import { AduancateringPage } from './aduancatering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduancateringPageRoutingModule
  ],
  declarations: [AduancateringPage]
})
export class AduancateringPageModule {}
