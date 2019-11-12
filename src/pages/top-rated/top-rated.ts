import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopRatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public topmovie: MovieProvider) {
    this.loadTopData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedPage');
  }

  loadTopData(){
    this.topmovie.getTopMovie().subscribe(topmovies => {
      this.moviesArray = topmovies['results'];
    });
  }

  getDetail(topMovie){
    this.navCtrl.push("DetailMoviePage", topMovie);
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.topmovie.searchMovie(val).subscribe(topmovies => {
        this.moviesArray = topmovies['results'];
      });
    } else {
      this.loadTopData();
    }
  }

}
