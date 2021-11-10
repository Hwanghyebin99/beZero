import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChattingPageRoutingModule } from './chatting-routing.module';

import { ChattingPage } from './chatting.page';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChattingPageRoutingModule,
    CoreModule
  ],
  declarations: [ChattingPage]
})
export class ChattingPageModule {}
