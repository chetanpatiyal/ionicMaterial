import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';
import { SavedPage } from '../saved/saved';
import { EventPage } from '../event/event';
import { InboxPage } from '../inbox/inbox';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ExplorePage;
  tab2Root: any = SavedPage;
  tab3Root: any = EventPage;
  tab4Root: any = InboxPage;
  tab5Root: any = ProfilePage;
  constructor(public navCtrl: NavController) {
  }
  
}
