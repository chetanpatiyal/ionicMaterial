import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  username:any;
  constructor(public navCtrl: NavController,public modalCtrl:ModalController, storage:Storage) {
   storage.get('userdata').then((val) =>{
      this.username = val;
      if(this.username === null){
      this.loginModal();
      }
      console.log(this.username);
   }).catch(err =>{
      this.loginModal();
   })
  }
  loginModal(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
