import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviemenuPage } from './moviemenu';

@NgModule({
  declarations: [
    MoviemenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviemenuPage),
  ],
})
export class MoviemenuPageModule {}
