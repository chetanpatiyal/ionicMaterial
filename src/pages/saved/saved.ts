import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';

@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html'
})
export class SavedPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToExplore(params){
    if (!params) params = {};
    this.navCtrl.push(ExplorePage);
  }
}
