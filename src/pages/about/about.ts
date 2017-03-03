import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProgdasPage } from '../progdas/progdas'
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

   onSignup() {
    this.navCtrl.push(ProgdasPage);
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Maaf, Course ini akan segera tersedia',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }


}
