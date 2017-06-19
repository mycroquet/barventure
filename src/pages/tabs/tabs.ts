import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BarPage } from '../bar-page/bar-page';
import { EnableLocationPage } from '../enable-location/enable-location';
import { EnablePushPage } from '../enable-push/enable-push';
import { RedeemModal } from '../redeem-modal/redeem-modal';

import { FirstSlide } from '../slides/slide-1';
import { SecondSlide } from '../slides/slide-2';
import { ThirdSlide } from '../slides/slide-3';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FirstSlide;
  tab2Root = SecondSlide;
  tab3Root = ThirdSlide;

  constructor() {

  }
}
