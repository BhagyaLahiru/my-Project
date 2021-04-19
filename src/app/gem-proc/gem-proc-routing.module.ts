import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemProcPage } from './gem-proc.page';

const routes: Routes = [
  {
    path: '',
    component: GemProcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemProcPageRoutingModule {}
