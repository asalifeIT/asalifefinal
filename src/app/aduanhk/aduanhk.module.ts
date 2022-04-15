import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanhkPageRoutingModule } from './aduanhk-routing.module';

import { AduanhkPage } from './aduanhk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanhkPageRoutingModule
  ],
  declarations: [AduanhkPage]
})
export class AduanhkPageModule {}
