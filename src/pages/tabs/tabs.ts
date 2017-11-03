import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ReportPage } from '../report/report';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = ReportPage;

  constructor() {

  }
}
