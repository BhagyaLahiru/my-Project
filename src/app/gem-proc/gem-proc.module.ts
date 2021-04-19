import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemProcPageRoutingModule } from './gem-proc-routing.module';

import { GemProcPage } from './gem-proc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemProcPageRoutingModule
  ],
  declarations: [GemProcPage]
})
export class GemProcPageModule {}
