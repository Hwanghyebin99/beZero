import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedModule } from '../../features/shared/shared.module';

import { ShareComponent } from './share/share.component';
import { BarterComponent } from './barter/barter.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    SharedModule
  ],
  declarations: [
    Tab1Page,
    BarterComponent,
    ShareComponent
  ]
})
export class Tab1PageModule {}
