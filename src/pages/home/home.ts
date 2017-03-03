import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Progdas} from '../../providers/progdas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
    posts: any;
    modul:any;
  constructor(public navCtrl: NavController, private progdas: Progdas) {

  }

  ngOnInit(){
    this.getPost(11);
  }

  getPost(category){

    this.progdas.getNews(category).subscribe(response => {
              this.posts = response;

        console.log(response);

    });

  }

}
