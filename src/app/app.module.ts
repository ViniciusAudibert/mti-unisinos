import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';

import { SearchComponent } from '../components/search/search';

import { AboutPage } from '../pages/about/about';
import { ReportPage } from '../pages/report/report';
import { DetailsPage } from '../pages/details/details';
import { HomePage } from '../pages/home/home';
import { MachineListPage } from '../pages/machineList/machineList';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductService } from '../services/product/product.service'
import { MachineService } from '../services/machine/machine.service'
import { ModalService } from '../services/modal/modal.service'
import { ReportService } from '../services/report/report.service'

import { MachineListModalModule } from '../modals/machineList/machineList.module'
import { ProductListModalModule } from '../modals/productList/productList.module'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ReportPage,
    DetailsPage,
    HomePage,
    MachineListPage,
    TabsPage,
    SearchComponent,
    AdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MachineListModalModule,
    ProductListModalModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ReportPage,
    DetailsPage,
    HomePage,
    MachineListPage,
    TabsPage,
    SearchComponent,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Keyboard,
    ProductService,
    MachineService,
    ModalService,
    ReportService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
