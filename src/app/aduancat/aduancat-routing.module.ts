import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduancatPage } from './aduancat.page';

const routes: Routes = [
  {
    path: '',
    component: AduancatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduancatPageRoutingModule {}
