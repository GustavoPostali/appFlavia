import { Component } from '@angular/core';

import { LogoutPage } from '../logout/logout';
import { NewsPage } from '../news/news';
import { ReportsPage } from '../reports/reports';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReportsPage;
  tab2Root = NewsPage;
  tab3Root = LogoutPage;

  constructor() {

  }
}
