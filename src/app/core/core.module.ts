import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GetImageUrlPipe } from './get-image-url.pipe';

@NgModule({
  declarations: [ GetImageUrlPipe],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    GetImageUrlPipe
  ],
})
export class CoreModule {}