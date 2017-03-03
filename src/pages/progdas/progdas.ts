import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgdasMateriPage } from '../progdas-materi/progdas-materi'


/*
  Generated class for the Progdas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-progdas',
  templateUrl: 'progdas.html'
})
export class ProgdasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgdasPage');
  }

  changeMateri() {
    this.navCtrl.push(ProgdasMateriPage);
  }

}
