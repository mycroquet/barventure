import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BarPage } from '../bar-page/bar-page';
import { EnableLocationPage } from '../enable-location/enable-location';
import { EnablePushPage } from '../enable-push/enable-push';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EnableLocationPage;
  tab2Root = EnablePushPage;
  tab3Root = EnablePushPage;

  constructor() {

  }
}
