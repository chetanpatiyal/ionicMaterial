import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'modal-page',
  templateUrl: 'modal.html'
})
export class ModalPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  rootPage = LoginPage;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {
  }
  dismiss(){
    this.viewCtrl.dismiss();  
  }
  register(){
      this.navCtrl.push(SignupPage);
  }
}
