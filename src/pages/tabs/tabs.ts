import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabRoot1 = 'BusinessPage';
  tabRoot2 = 'GamingPage';
  tabRoot3 = 'TechnologyPage';
  tabRoot4 = 'SportsPage';
  tabRoot5 = 'GeneralPage';
  tabRoot6 = 'CategoriesPage';

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
