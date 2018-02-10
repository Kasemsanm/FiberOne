import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
import { GpsPage } from '../gps/gps';
import { InfoPage } from '../info/info';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  tabBarElement:any;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    setTimeout(() => {
      this.splash = false;
    },4000);
  }

  openMapsPage(){
    this.navCtrl.push(MapsPage);
  }
  openAddPage(){
    this.navCtrl.push(AddPage);
  }
  openInfoPage(){
    this.navCtrl.push(InfoPage);
  }
  openGpsPage(){
    this.navCtrl.push(GpsPage);
  }
}
