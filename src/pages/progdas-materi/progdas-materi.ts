import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgdasMateriPage');
  }

}
