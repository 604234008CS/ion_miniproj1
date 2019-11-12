import { SocialSharing } from '@ionic-native/social-sharing';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { MoviemenuPage } from './../moviemenu/moviemenu';
import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})
export class DetailMoviePage {


  movieArray: any = [];
  detail: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';


  constructor(public navCtrl: NavController, public navParams: NavParams, public moviedetail: MovieProvider, private tts: TextToSpeech, private socialSharing: SocialSharing) {


  }

  ionViewDidLoad() {
    this.detail = this.navParams.data;
  }

  goToMenu() {
    this.navCtrl.push(MoviemenuPage);
  }

  goToVideo(movieid) {
    this.navCtrl.push("VideomoviePage", movieid);
  }

  playtext(overview) {
    this.tts.speak(overview)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  Stoptext() {
    this.tts.speak("")
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  share(){
    this.socialSharing.shareViaFacebook(this.detail.overview,null,null);
  }
}





