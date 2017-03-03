import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProgdasPage } from '../progdas/progdas'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

   onSignup() {
    this.navCtrl.push(ProgdasPage);
  }

}
