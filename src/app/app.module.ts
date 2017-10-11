import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';

import { AboutPage } from '../pages/about/about';
import { DetailsPage } from '../pages/details/details';
import { SearchPage } from '../pages/search/search';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductService } from '../services/product/product.service'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailsPage,
    SearchPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DetailsPage,
    SearchPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Keyboard,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
