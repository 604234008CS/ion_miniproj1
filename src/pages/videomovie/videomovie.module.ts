import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideomoviePage } from './videomovie';

@NgModule({
  declarations: [
    VideomoviePage,
  ],
  imports: [
    IonicPageModule.forChild(VideomoviePage),
  ],
})
export class VideomoviePageModule {}
