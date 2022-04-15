import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduancatPageRoutingModule } from './aduancat-routing.module';

import { AduancatPage } from './aduancat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduancatPageRoutingModule
  ],
  declarations: [AduancatPage]
})
export class AduancatPageModule {}
