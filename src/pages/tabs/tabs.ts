import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BarPage } from '../bar-page/bar-page';
import { EnableLocationPage } from '../enable-location/enable-location';
import { EnablePushPage } from '../enable-push/enable-push';
import { CreateAccountPage } from '../create-account/create-account';
import { ConfirmedPage } from '../confirmed/confirmed';
import { RedeemModal } from '../redeem-modal/redeem-modal';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedeemModal;
  tab2Root = CreateAccountPage;
  tab3Root = ConfirmedPage;

  constructor() {

  }
}
