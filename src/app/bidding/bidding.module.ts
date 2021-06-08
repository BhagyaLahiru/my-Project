import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimePipe } from './time.pipe';

import { IonicModule } from '@ionic/angular';

import { BiddingPageRoutingModule } from './bidding-routing.module';

import { BiddingPage } from './bidding.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BiddingPageRoutingModule
  ],
  declarations: [BiddingPage, TimePipe]
})
export class BiddingPageModule {}
