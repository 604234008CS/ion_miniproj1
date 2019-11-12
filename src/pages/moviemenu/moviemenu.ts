import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviemenu',
  templateUrl: 'moviemenu.html',
})
export class MoviemenuPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviemenuPage');
  }
  goToNow(){
    this.navCtrl.push("NowPlayingPage");
  }

  goToUp(){
    this.navCtrl.push("UpcomingMoviePage");
  }

  goToPop(){
    this.navCtrl.push("PopularMoviePage");
  }

  goToTop(){
    this.navCtrl.push("TopRatedPage");
  }

}
