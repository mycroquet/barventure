import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { SharePage } from '../share/share';
import { SearchPage } from '../search/search';
import { BarPage } from '../bar-page/bar-page';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = ListPage;
  tab3Root = BarPage;

  constructor() {

  }
}
