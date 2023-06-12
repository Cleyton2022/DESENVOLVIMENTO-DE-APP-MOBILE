import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarlanchePage } from './mostrarlanche.page';

const routes: Routes = [
  {
    path: ':id',
    component: MostrarlanchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarlanchePageRoutingModule {}
