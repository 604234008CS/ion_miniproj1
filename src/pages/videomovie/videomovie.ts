import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideomoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videomovie',
  templateUrl: 'videomovie.html',
})
export class VideomoviePage {

  videoArray: any =[];
  movie: any = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public video: MovieProvider, private dom: DomSanitizer) {
  
  }

  ionViewDidLoad() {
    this.movie = this.navParams.data;
    this.video.getVideo(this.movie).subscribe((videos: any = []  )=> {
      this.videoArray = videos['results']; 
    });
  }


  openVideo(key){
    let videoUrl = 'https://www.youtube.com/embed/' + key + '?rel=0&showinfo=0';
    return this.dom.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
