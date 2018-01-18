import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ExplorePage } from '../pages/explore/explore';
import { SavedPage } from '../pages/saved/saved';
import { EventPage } from '../pages/event/event';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { InboxPage } from '../pages/inbox/inbox';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { ModalPage } from '../pages/modal/modal';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    SavedPage,
    EventPage,
    TabsControllerPage,
    InboxPage,
    ProfilePage,
    LoginPage,
    SignupPage,ModalPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    SavedPage,
    EventPage,
    TabsControllerPage,
    InboxPage,
    ProfilePage,
    LoginPage,SignupPage,ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider
  ]
})
export class AppModule {}