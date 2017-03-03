import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


/*
  Generated class for the ProgdasMateri page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-progdas-materi',
  templateUrl: 'progdas-materi.html'
})
export class ProgdasMateriPage {
    post:any;
    link:any;
    ytUrl:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.ytUrl = 'https://www.youtube.com/embed/';
    this.post = navParams.get('post');
    console.log(this.post);

    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.ytUrl + this.post.acf.youtube_link);

  }

  

}
