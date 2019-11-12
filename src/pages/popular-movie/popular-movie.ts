import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';





/**
 * Generated class for the PopularMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular-movie',
  templateUrl: 'popular-movie.html',
})
export class PopularMoviePage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public popmovie: MovieProvider ) {
    this.loadPopData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularMoviePage');
  }


  loadPopData(){
    this.popmovie.getPopMovie().subscribe(popmovies => {
      this.moviesArray = popmovies['results'];
    });
    
  }

  getDetail(popmovie){
    this.navCtrl.push("DetailMoviePage", popmovie);
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.popmovie.searchMovie(val).subscribe(popmovies => {
        this.moviesArray = popmovies['results'];
      });
    } else {
      this.loadPopData();
    }
  }
  

}
