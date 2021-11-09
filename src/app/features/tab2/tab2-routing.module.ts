import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { IntroductionComponent } from './introduction/introduction.component';
import { RecommendComponent } from './recommend/recommend.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: '',
        redirectTo: 'introduction'
      },
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'recommend',
        component: RecommendComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
