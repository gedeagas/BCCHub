import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgdasMateriPage } from '../progdas-materi/progdas-materi';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Progdas} from '../../providers/progdas';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-progdas',
  templateUrl: 'progdas.html'
})
export class ProgdasPage {
    items: any;
    posts: any;
    modul:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private progdas: Progdas, public toastCtrl: ToastController) {
  }

  ngOnInit(){
    this.getPost(10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgdasPage');
  }

  changeMateri() {
    this.navCtrl.push(ProgdasMateriPage);
  }

  

  getPost(category){

    this.progdas.getPost(category).subscribe(response => {
        this.posts = response;
        console.log(response);
    });

  }

  viewItem(post){
    this.navCtrl.push(ProgdasMateriPage, {
      post:post
    })
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Maaf, Modul praktikum saati ini belum tersedia',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  

}
