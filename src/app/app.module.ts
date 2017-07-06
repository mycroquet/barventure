import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { MapUnsubscribed } from '../pages/map/map-unsubscribed';
import { ListPage } from '../pages/list/list';
import { BarPage } from '../pages/bar-page/bar-page';
import { CreateAccount } from '../pages/create-account/create-account';
import { ConfirmedPage } from '../pages/confirmed/confirmed';
import { EnableLocationPage } from '../pages/enable-location/enable-location';
import { EnablePushPage } from '../pages/enable-push/enable-push';
import { RedeemModal } from '../pages/redeem-modal/redeem-modal';
import { FirstSlide } from '../pages/slides/slide-1';
import { SecondSlide } from '../pages/slides/slide-2';
import { ThirdSlide } from '../pages/slides/slide-3';
import { PaymentPlan } from '../pages/subscription/pay-plan';
import { Subscribe } from '../pages/subscription/subscribe';
import { Verification } from '../pages/subscription/verification';



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
    MapUnsubscribed,
    ListPage,
    BarPage,
    CreateAccount,
    ConfirmedPage,
    EnableLocationPage,
    EnablePushPage,
    RedeemModal,
    FirstSlide,
    SecondSlide,
    ThirdSlide,
    PaymentPlan,
    Subscribe,
    Verification,
    Search
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
    MapUnsubscribed,
    ListPage,
    BarPage,
    CreateAccount,
    ConfirmedPage,
    EnableLocationPage,
    EnablePushPage,
    RedeemModal,
    FirstSlide,
    SecondSlide,
    ThirdSlide,
    PaymentPlan,
    Subscribe,
    Verification,
    Search
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
