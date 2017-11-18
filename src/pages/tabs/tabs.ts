import { Component } from '@angular/core';

import { ReportPage } from '../report/report';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReportPage;

  constructor() {

  }
}
