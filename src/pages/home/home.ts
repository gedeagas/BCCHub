import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Progdas} from '../../providers/progdas';
import { TouchID } from 'ionic-native';
import { FingerprintAIO } from 'ionic-native';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
    posts: any;
    modul:any;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, private progdas: Progdas) {

  }

  

  ngOnInit(){
    this.getPost(11);
  }

  check(){
    console.log('check');
    FingerprintAIO.isAvailable().then(result =>{
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  show(){
    console.log('show');
    FingerprintAIO.show({
     clientId: "Fingerprint-Demo",
      clientSecret: "password"
      }).then(result => {
      console.log(result);
      }).catch(err => {
      console.log(err);
      });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Auth',
      subTitle: 'Berhasil Login Menggunakan Fingerprint',
      buttons: ['OK']
    });
    alert.present();
  }

  getPost(category){

    this.progdas.getNews(category).subscribe(response => {
              this.posts = response;

        console.log(response);

    });

  }

}
