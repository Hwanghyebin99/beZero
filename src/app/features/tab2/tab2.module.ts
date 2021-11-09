import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SharedModule } from '../shared/shared.module';

import { IntroductionComponent } from './introduction/introduction.component';
import { RecommendComponent } from './recommend/recommend.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    SharedModule
  ],
  declarations: [
    Tab2Page,
    IntroductionComponent,
    RecommendComponent
  ]
})
export class Tab2PageModule {}
