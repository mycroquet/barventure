import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { MapUnsubscribed } from '../map/map-unsubscribed';
import { ListPage } from '../list/list';
import { BarPage } from '../bar-page/bar-page';
import { ConfirmedPage } from '../confirmed/confirmed';
import { EnableLocationPage } from '../enable-location/enable-location';
import { EnablePushPage } from '../enable-push/enable-push';
import { RedeemModal } from '../redeem-modal/redeem-modal';
import { CreateAccount } from '../create-account/create-account';
import { FirstSlide } from '../slides/slide-1';
import { SecondSlide } from '../slides/slide-2';
import { ThirdSlide } from '../slides/slide-3';
import { PaymentType } from '../subscription/pay-type';
import { SelectPlan } from '../subscription/select-plan';
import { Subscribe } from '../subscription/subscribe';
import { Verification } from '../subscription/verification';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ThirdSlide;
  tab2Root = MapPage;
  tab3Root = ListPage;

  constructor() {

  }
}
