import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';

import { AboutPage } from '../pages/about/about';
import { ReportPage } from '../pages/report/report';
import { DetailsPage } from '../pages/details/details';
import { HomePage } from '../pages/home/home';
import { MachineListPage } from '../pages/machineList/machineList';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductService } from '../services/product/product.service'
import { ModalService } from '../services/modal/modal.service'

import { MachineListModalModule } from '../modals/machineList/machineList.module'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ReportPage,
    DetailsPage,
    HomePage,
    MachineListPage,
    TabsPage,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MachineListModalModule,
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
    SearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Keyboard,
    ProductService,
    ModalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
