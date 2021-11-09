import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ShareComponent } from './share/share.component';
import { BarterComponent } from './barter/barter.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: '',
        redirectTo: 'sharing'
      },
      {
        path: 'sharing',
        component: ShareComponent
      },
      {
        path: 'barter',
        component: BarterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
