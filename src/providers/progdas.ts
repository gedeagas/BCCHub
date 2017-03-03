import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Progdas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Progdas {
  baseUrl:String;
  constructor(public http:Http) {
    this.http = http;
    this.baseUrl = 'https://agastyadarma.com/api/blog/wp-json/wp/v2/posts';
  }

  getPost(category){
    return this.http.get(this.baseUrl+'?categories='+category+'&orderby=title&order=asc').map(res => res.json());

  }

  getNews(category){
        return this.http.get(this.baseUrl+'?categories='+category).map(res => res.json());

  }



}
