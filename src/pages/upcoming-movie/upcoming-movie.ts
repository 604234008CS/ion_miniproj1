import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpcomingMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming-movie',
  templateUrl: 'upcoming-movie.html',
})
export class UpcomingMoviePage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public upmovie: MovieProvider) {
    this.loadUpData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingMoviePage');
  }

  loadUpData(){
    this.upmovie.getUpMovie().subscribe(upmovies => {
      this.moviesArray = upmovies['results'];
    });
  }

  getDetail(upmovie){
    this.navCtrl.push("DetailMoviePage", upmovie);
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.upmovie.searchMovie(val).subscribe(upmovies => {
        this.moviesArray = upmovies['results'];
      });
    } else {
      this.loadUpData();
    }
  }
}
