import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../app/core/auth.guard";


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
    {
    path: 'tabs',
    loadChildren: () => import('./features/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login-main/login-main.module').then( m => m.LoginMainPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./features/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chatting',
    loadChildren: () => import('./features/chatting/chatting.module').then( m => m.ChattingPageModule)
  },
  {
    path: 'mypage',
    loadChildren: () => import('./features/mypage/mypage.module').then( m => m.MypagePageModule)
  },
  {
    path: 'chatting',
    loadChildren: () => import('./features/chatting/chatting.module').then( m => m.ChattingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
