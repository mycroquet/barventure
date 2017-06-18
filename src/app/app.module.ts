import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { BarPage } from '../pages/bar-page/bar-page';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { ConfirmedPage } from '../pages/confirmed/confirmed';
import { EnableLocationPage } from '../pages/enable-location/enable-location';
import { EnablePushPage } from '../pages/enable-push/enable-push';
import { RedeemModal } from '../pages/redeem-modal/redeem-modal';
import { FirstSlide } from '../pages/slides/slide-1';
import { SecondSlide } from '../pages/slides/slide-2';
import { ThirdSlide } from '../pages/slides/slide-3';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    ListPage,
    BarPage,
    CreateAccountPage,
    ConfirmedPage,
    EnableLocationPage,
    EnablePushPage,
    RedeemModal,
    FirstSlide,
    SecondSlide,
    ThirdSlide
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapPage,
    ListPage,
    BarPage,
    CreateAccountPage,
    ConfirmedPage,
    EnableLocationPage,
    EnablePushPage,
    RedeemModal,
    FirstSlide,
    SecondSlide,
    ThirdSlide
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
