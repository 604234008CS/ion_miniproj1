import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NowPlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowmovie: MovieProvider) {
    this.loadNowData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPlayingPage');
  }

  loadNowData(){
    this.nowmovie.getNowMovie().subscribe(nowmovies => {
      this.moviesArray = nowmovies['results'];
    });
  }

  getDetail(movieid){
    this.navCtrl.push("DetailMoviePage", movieid);
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.nowmovie.searchMovie(val).subscribe(nowmovies => {
        this.moviesArray = nowmovies['results'];
      });
    } else {
      this.loadNowData();
    }
  }
}
