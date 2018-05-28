import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LogoutPage } from '../pages/logout/logout';
import { NewsPage } from '../pages/news/news';
import { ReportsPage } from '../pages/reports/reports';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { FormPage } from '../pages/form/form';
import { MyReportsPage } from '../pages/my-reports/my-reports';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';

import { UserDataProvider } from '../providers/user-data/user-data';

@NgModule({
  declarations: [
    MyApp,
    LogoutPage,
    NewsPage,
    ReportsPage,
    LoginPage,
    TabsPage,
    FormPage,
    MyReportsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LogoutPage,
    NewsPage,
    ReportsPage,
    LoginPage,
    TabsPage,
    FormPage,
    MyReportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    UserDataProvider
  ]
})
export class AppModule {}
