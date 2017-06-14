import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BarPage } from '../bar-page/bar-page';
import { CreateAccountPage } from '../create-account/create-account';
import { ConfirmedPage } from '../confirmed/confirmed';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CreateAccountPage;
  tab2Root = CreateAccountPage;
  tab3Root = ConfirmedPage;

  constructor() {

  }
}
