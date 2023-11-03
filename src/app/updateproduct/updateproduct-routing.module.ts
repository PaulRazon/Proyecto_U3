import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateproductPage } from './updateproduct.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateproductPageRoutingModule {}
