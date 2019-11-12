import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseURL = 'https://api.themoviedb.org/3';
  public apiKey = 'api_key=bf42309105e93977ded2371c63d7b6f6';
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getPopMovie() {
    const url = this.baseURL + '/movie/popular?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getNowMovie() {
    const url = this.baseURL + '/movie/now_playing?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getUpMovie() {
    const url = this.baseURL + '/movie/upcoming?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getTopMovie() {
    const url = this.baseURL + '/movie/top_rated?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  searchMovie(query) {
    const url = this.baseURL + '/search/movie?query=' + query + '&' + this.apiKey;
    return this.http.get(url);
  }

  getDetail(movieId){
    const url = this.baseURL + '/movie/' + movieId + '?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  getVideo(movieId){
    const url = this.baseURL + '/movie/' + movieId + '/videos?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }
}
