import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { GpsPage } from '../pages/gps/gps';
import { InfoPage } from '../pages/info/info';
import { AddPage } from '../pages/add/add';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = HomePage;
  activePage:any;

  pages: Array<{icon:string,title: string,component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { icon:'home', title: 'หน้าหลัก',component: HomePage},
      { icon:'map', title: 'แผนที่',component: MapsPage},
      { icon:'archive', title: 'ข้อมูลลูกค้า',component: InfoPage},
      { icon:'person-add', title: 'เพิมข้อมูลลูกค้า',component: AddPage},
      { icon:'navigate', title: 'ตำแหน่งพนักงาน',component: GpsPage},
    ];

    this.activePage = this.pages[0];

  }

  openPage(page){
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page = this.activePage;
  }
}

