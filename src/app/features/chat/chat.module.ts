import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { GetImageUrlPipe } from '../../core/get-image-url.pipe';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    CoreModule
  ],
  declarations: [ChatPage],
  providers: [GetImageUrlPipe]
})
export class ChatPageModule {}
