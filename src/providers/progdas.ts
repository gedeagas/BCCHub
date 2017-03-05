import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Progdas provider.
  Code By : Agastya Darma Laksana
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
